from PyPDF2 import PdfReader
from pdf2image import convert_from_path
import pytesseract
import os
import docx2txt
import shutil
from PIL import Image

def file_type_of(file_path):
    file_extension = os.path.splitext(file_path)[1].lower()

    if file_extension in ['.doc', '.docx']:
        return 'Document'
    elif file_extension == '.pdf':
        return 'PDF'
    else:
        return 'Text'

def extract_text(file_path):

    # check what file type is being passed
    file_type = file_type_of(file_path)

    if file_type == 'PDF':

        reader = PdfReader(file_path)
        text = ''

        for page in reader.pages:
            text += page.extract_text()

        # if text is embedded in image, try to read it
        if len(text) < 10:
            images = convert_from_path(file_path)
            
            if not os.path.exists('tmp_imgs'):
                os.makedirs('tmp_imgs')

            for i, image in enumerate(images):
                image_path = f"tmp_imgs/image_{i+1}.jpg"
                image.save(image_path, "JPEG")

                PIL_image = Image.open(image_path)

                # image preprocssing    
                PIL_image = PIL_image.convert('L')
                PIL_image.save(image_path, "JPEG")

                text += pytesseract.image_to_string(PIL_image)

                shutil.rmtree('tmp_imgs')

    elif file_type == 'Document':
        text = docx2txt.process(file_path)

    elif file_type == 'Text':
        with open(file_path, 'r') as file:
            text = file.read()


    return text