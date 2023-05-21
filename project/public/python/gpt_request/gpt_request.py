import sys
import os
import api_handler

if __name__ == "__main__":
    
    if len(sys.argv) < 2:
        print("Usage: python3 gpt_request.py <file>")
        sys.exit(1)

    # Get the first argument
    file_path = sys.argv[1]

    if not os.path.exists(file_path):
        print(f'Error: Invalid file path \'{file_path}\'', file=sys.stderr)
        sys.exit(1)

    
    with open(file_path, "r") as file:
        data = file.read()

    response = api_handler.make_request(data)
    print(response)

    self_path = os.path.dirname(os.path.abspath(__file__))


    try:
        with open(f'{self_path}/../response.json', "w") as file:
            file.write(response)
    except IOError:
        print("Error writing to the file", file=sys.stderr)

