from flask import Flask, jsonify, make_response, request
from flask_cors import CORS, cross_origin
from utils import generate_recs


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def hello_world():
    response = {"data": "This is from the Flask API call!"}
    return jsonify(response)

@app.route('/get-recs', methods=['POST'])
@cross_origin()
def get_recs():
    data = request.get_json()
    ingredients = data['ingredients']
    cookingTime = data['cookingTime']
    mealType = data['mealType']
    keyWords = data['keyWords']

    dishes = generate_recs(ingredients, cookingTime, mealType, keyWords)
    
    recommendations = dishes[0].split("\n\n")

    recipe_dict = {}

    for rec in recommendations:
        lines = rec.split("\n")
        key = lines[0]
        recipe_dict[key] = {}
        
        for line in lines[1:]:
            if ":" in line:
                split_line = line.split(": ")
                recipe_dict[key][split_line[0]] = split_line[1]

    response_data = {"dishes": dishes}

    return jsonify(recipe_dict)
    
