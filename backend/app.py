from flask import Flask, jsonify, make_response
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def hello_world():
    response = {"data": "This is from the Flask API call!"}
    return jsonify(response)