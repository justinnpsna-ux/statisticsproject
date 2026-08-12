from flask import Flask, request, jsonify
from flask_cors import CORS  # Web browsers require this to allow frontend connections
import math

app = Flask(__name__)
CORS(app)  # Enables Cross-Origin Resource Sharing for all routes

@app.route('/api/statistics', methods=['POST'])
def get_data():
    response = request.get_json() 
    sum = 0.0

    if response is None:
        return jsonify({"error": "No valid number received"}), 400

    min = float(response[0])
    max = float(response[0])
    print("MINIMUM VALUE IS:", min, flush=True)

    for numStr in response: 
        num = float(numStr)
        sum += num

        if num > max:
            max = num

        if num < min:
            min = num

    mean = sum / len(response)

    variance = 0

    for numStr in response: 
        num = float(numStr)
        variance += (((num - mean) * (num - mean)) / len(response))
        
    return jsonify({ "sum": sum, "mean": mean, "variance": variance, "sd": math.sqrt(variance), "min": min, "max": max})

if __name__ == '__main__':
    app.run(port=8000, debug=True)