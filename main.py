from flask import Flask, request, jsonify
from flask_cors import CORS  # Web browsers require this to allow frontend connections
import math

app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Resource Sharing for all routes

@app.route('/api/sdCalculator', methods=['POST'])
def get_data():
    response = request.get_json() 
    sum = 0

    if response is None:
        return jsonify({"error": "No valid number received"}), 400

    for num in response: 
        sum += float(num)

    mean = sum / len(response)

    sdSq = 0

    for num in response: 
        sdSq += (((float(num) - mean) * (float(num) - mean)) / len(response))
        
    return jsonify(math.sqrt(sdSq))

if __name__ == '__main__':
    app.run(port=8000, debug=True)