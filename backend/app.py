from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from utils import generate_recs, find_recipes
import sys


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

    dishes = generate_recs(ingredients, cookingTime, mealType)
    
    recommendations = dishes[0].split("\n\n")[1:]

    recipes_list = []

    for rec in recommendations:
        single_recipe_dict = {}
        lines = rec.split("\n")
        
        for line in lines[1:]:
            if ":" in line:
                split_line = line.split(": ")
                single_recipe_dict[split_line[0]] = split_line[1]
            else:
                single_recipe_dict['Description'] = line

        recipes_list.append(single_recipe_dict)

    return jsonify({"data": recipes_list})

@app.route('/get-recipes', methods=['POST'])
@cross_origin()
def get_recipes():
    data = request.get_json()
    dish = data["dish"]
    cooking_time = data["cooking_time"]
    search_term = cooking_time + " recipe for " + dish

    links = find_recipes(dish)

    return jsonify({"data": links})
