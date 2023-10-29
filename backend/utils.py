import requests
from googlesearch import search

def get_recs():
    endpoint = 'https://api.together.xyz/inference'
    res = requests.post(endpoint, json={
        "model": "togethercomputer/llama-2-70b-chat",
        "max_tokens": 512,
        "prompt": "tell me a joke",
        "request_type": "language-model-inference",
        "temperature": 0.7,
        "top_p": 0.7,
        "top_k": 50,
        "repetition_penalty": 1,
        "stop": [
            "[/INST]",
            "</s>"
        ],
        "negative_prompt": "",
        "sessionKey": "2e59071178ae2b05e68015136fb8045df30c3680"
    }, headers={
        "Authorization": "Bearer 9610647d04d7922a1f84aef07dc3da8fcdeaee85cbcb24ab5ad70132edb92800",
    })

    res_json = res.json()
    print(res_json)
    generated_text = [choice["text"] for choice in res_json["output"]["choices"]]

    return generated_text

def find_recipes():
    recipes = []
    for result in search("cats", num_results=5, advanced=True):
        recipes.append(result)
    return recipes

