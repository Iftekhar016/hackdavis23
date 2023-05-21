import openai
import os
import json

def jsonify(string):
    data = []

    lines = string.splitlines()
    current_item = None
    for line in lines:
        line = line.strip().lower()  # Convert line to lowercase
        if line.startswith("front:"):
            front_text = line.replace("front:", "").strip()
            current_item = {"front": front_text, "back": None}
            data.append(current_item)
        elif line.startswith("back:"):
            if current_item is not None:
                back_text = line.replace("back:", "").strip()
                current_item["back"] = back_text

    return json.dumps(data, indent=4)


def make_request(data):

    self_path = os.path.dirname(os.path.abspath(__file__))

    # read in the master prompt
    with open(f'{self_path}/master_prompt.txt') as file:
        master_prompt = file.read()

    # Load the API key from the configuration file
    with open(f'{self_path}/config.json') as config_file:
        config = json.load(config_file)
        api_key = config['API_KEY']

    openai.organization = "hackdavis"
    openai.api_key = api_key
    
    raw_response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": f"{master_prompt}"},
            {"role": "user", "content": f"Here is the data: {data}"},
            ]
    )

    response = jsonify(raw_response['choices'][0]['message']['content'])

    return response

