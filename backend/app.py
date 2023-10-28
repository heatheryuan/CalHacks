from flask import Flask, jsonify, make_response, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def hello_world():
    response = {"data": "This is from the Flask API call!"}
    return jsonify(response)

@app.route('/add_prefs', methods=['POST'])
@cross_origin()
def add_prefs():
    data = request.get_json()
    ingredients = data['ingredients']
    cookingTime = data['cookingTime']
    mealType = data['mealType']
    response_data = {"message": "Preferences received successfully"}
    return jsonify(response_data)