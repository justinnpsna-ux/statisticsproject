from flask import Flask, request, jsonify
from flask_cors import CORS  # Web browsers require this to allow frontend connections
import requests

app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Resource Sharing for all routes

@app.route('/api/data', methods=['POST'])
def get_data():
    response = request.get_json() 

    if response is None:
        return jsonify({"error": "No valid number received"}), 400

    result = response['firstNum'] + response['secondNum']
    return jsonify(result)

if __name__ == '__main__':
    app.run(port=8000, debug=True)