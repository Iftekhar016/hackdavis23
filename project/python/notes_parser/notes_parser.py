import text_extractor
import sys
import os

if __name__ == "__main__":
    
    if len(sys.argv) < 2:
        print("Usage: python3 notes_parser.py <file>")
        sys.exit(1)

    # Get the first argument
    file_path = sys.argv[1]

    if not os.path.exists(file_path):
        print(f'Error: Invalid file path \'{file_path}\'', file=sys.stderr)
        sys.exit(1)

    extracted_text = text_extractor.extract_text(file_path)

    # write extracted text to file

    self_path = os.path.dirname(os.path.abspath(__file__))

    try:
        with open(f'{self_path}/../tmpFileData', "w") as file:
            file.write(extracted_text)
    except IOError:
        print("Error writing to the file", file=sys.stderr)