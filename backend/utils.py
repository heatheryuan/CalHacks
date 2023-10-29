import requests
from googlesearch import search
from dotenv import load_dotenv

TEMPLATE_FILE = "./prompts/prompt2.txt"

template = open(TEMPLATE_FILE, 'r').read()

def formatPrompt(ingredients, cookingTime, mealType, keyWords): 
    prompt = template.format(
        must = ingredients['mustHave'],
        cannot = ingredients['cannotHave'],
        time = cookingTime,
        meal = mealType,
        keyWords = keyWords
    )
    return prompt

def generate_recs(ingredients, cookingTime="", mealType="", keyWords=[]):
    res_json = {'status': 'finished', 'prompt': ['The user will give you data in the following criteria:\n\nIngredients: \nmustHave: Ingredients that must be included \ncanHave: Ingredients that may be included\ncannotHave: Ingredients that cannot be included \n\nCooking Time: Length of the cooking time of the recipe \n\nType of Meal: If a meal is breakfast, entree, or dessert\n\nkeyWords: Other factors \n\nDraw upon your vast knowledge of recipes, and think through this step-by-step to recommend 3 recipe ideas (just the idea, not the full recipe). \nEssential: These must be real recipes that users could find on the internet or recipes inspired from cultural staples, not just fake ones you\'ve made up to fit the criteria. \nFormat your 3 recipe recommendations in the following format. \n\nNumber each recipe\n\nName of Recipe: [Name of Recipe]\nCooking Time: [Cooking Time] \nIngredients Typically Used: [Ingredients Used]\n1-2 sentence description of the recipe. You are speaking to a general audience, so make the description sound appealing but do not use too much cooking jargon.\n\nUser Data is delimited by """\n\n"""\n\nIngredients: \nmustHave: [\'apple\', \'banana\']\ncannotHave: [\'sugar\']\n\nCooking Time::\n<25 min\n\nType of Meal: \nSnack/Appetizer\n\nkeyWords: \n[]\n\n"""\n\nCurate 3-5 recommendation ideas\n'], 'model': 'togethercomputer/llama-2-70b-chat', 'model_owner': '', 'tags': {}, 'num_returns': 1, 'args': {'model': 'togethercomputer/llama-2-70b-chat', 'max_tokens': 600, 'prompt': 'The user will give you data in the following criteria:\n\nIngredients: \nmustHave: Ingredients that must be included \ncanHave: Ingredients that may be included\ncannotHave: Ingredients that cannot be included \n\nCooking Time: Length of the cooking time of the recipe \n\nType of Meal: If a meal is breakfast, entree, or dessert\n\nkeyWords: Other factors \n\nDraw upon your vast knowledge of recipes, and think through this step-by-step to recommend 3 recipe ideas (just the idea, not the full recipe). \nEssential: These must be real recipes that users could find on the internet or recipes inspired from cultural staples, not just fake ones you\'ve made up to fit the criteria. \nFormat your 3 recipe recommendations in the following format. \n\nNumber each recipe\n\nName of Recipe: [Name of Recipe]\nCooking Time: [Cooking Time] \nIngredients Typically Used: [Ingredients Used]\n1-2 sentence description of the recipe. You are speaking to a general audience, so make the description sound appealing but do not use too much cooking jargon.\n\nUser Data is delimited by """\n\n"""\n\nIngredients: \nmustHave: [\'apple\', \'banana\']\ncannotHave: [\'sugar\']\n\nCooking Time::\n<25 min\n\nType of Meal: \nSnack/Appetizer\n\nkeyWords: \n[]\n\n"""\n\nCurate 3-5 recommendation ideas\n', 'request_type': 'language-model-inference', 'temperature': 0.7, 'top_p': 0.7, 'top_k': 50, 'repetition_penalty': 1, 'stop': ['[/INST]', '</s>'], 'negative_prompt': '', 'sessionKey': '2e59071178ae2b05e68015136fb8045df30c3680'}, 'subjobs': [], 'output': {'choices': [{'text': '\n(Note: The user data is not exhaustive. You may need to make some assumptions about what the user might like based on the information provided.)\n\nRecipe 1:\nName of Recipe: Apple-Banana Fritters\nCooking Time: 15 min\nIngredients Typically Used: Apple, banana, flour, eggs, milk, cinnamon, nutmeg\nDescription: A sweet and satisfying snack that combines the natural sweetness of apples and bananas with a hint of cinnamon and nutmeg.\n\nRecipe 2:\nName of Recipe: Apple-Banana Smoothie\nCooking Time: 5 min\nIngredients Typically Used: Apple, banana, yogurt, milk, honey\nDescription: A refreshing and healthy drink that blends the goodness of apples and bananas with the creaminess of yogurt and a touch of honey.\n\nRecipe 3:\nName of Recipe: Apple-Banana Oat Bars\nCooking Time: 20 min\nIngredients Typically Used: Apple, banana, oats, eggs, almond butter, honey\nDescription: A tasty and filling snack bar that combines the flavors of apples and bananas with the nutritional benefits of oats and almond butter. Perfect for a quick energy boost on-the-go.'}], 'request_id': '81d788def8a8251d-SJC'}}
    generated_text = [choice["text"] for choice in res_json["output"]["choices"]]
    
    return generated_text


def generate_recs_together(ingredients, cookingTime="", mealType="", keyWords=[]):
    prompt = formatPrompt(ingredients, cookingTime, mealType, keyWords)

    # endpoint = 'https://api.together.xyz/inference'
    # res = requests.post(endpoint, json={
    #     "model": "togethercomputer/llama-2-70b-chat",
    #     "max_tokens": 600,
    #     "prompt": prompt,
    #     "request_type": "language-model-inference",
    #     "temperature": 0.7,
    #     "top_p": 0.7,
    #     "top_k": 50,
    #     "repetition_penalty": 1,
    #     "stop": [
    #         "[/INST]",
    #         "</s>"
    #     ],
    #     "negative_prompt": "",
    #     "sessionKey": "2e59071178ae2b05e68015136fb8045df30c3680"
    # }, headers={
    #     "Authorization": "Bearer 9610647d04d7922a1f84aef07dc3da8fcdeaee85cbcb24ab5ad70132edb92800",
    # })

    # res_json = res.json()
    res_json = {'status': 'finished', 'prompt': ['The user will give you data in the following criteria:\n\nIngredients: \nmustHave: Ingredients that must be included \ncanHave: Ingredients that may be included\ncannotHave: Ingredients that cannot be included \n\nCooking Time: Length of the cooking time of the recipe \n\nType of Meal: If a meal is breakfast, entree, or dessert\n\nkeyWords: Other factors \n\nDraw upon your vast knowledge of recipes, and think through this step-by-step to recommend 3 recipe ideas (just the idea, not the full recipe). \nEssential: These must be real recipes that users could find on the internet or recipes inspired from cultural staples, not just fake ones you\'ve made up to fit the criteria. \nFormat your 3 recipe recommendations in the following format. \n\nNumber each recipe\n\nName of Recipe: [Name of Recipe]\nCooking Time: [Cooking Time] \nIngredients Typically Used: [Ingredients Used]\n1-2 sentence description of the recipe. You are speaking to a general audience, so make the description sound appealing but do not use too much cooking jargon.\n\nUser Data is delimited by """\n\n"""\n\nIngredients: \nmustHave: [\'apple\', \'banana\']\ncannotHave: [\'sugar\']\n\nCooking Time::\n<25 min\n\nType of Meal: \nSnack/Appetizer\n\nkeyWords: \n[]\n\n"""\n\nCurate 3-5 recommendation ideas\n'], 'model': 'togethercomputer/llama-2-70b-chat', 'model_owner': '', 'tags': {}, 'num_returns': 1, 'args': {'model': 'togethercomputer/llama-2-70b-chat', 'max_tokens': 600, 'prompt': 'The user will give you data in the following criteria:\n\nIngredients: \nmustHave: Ingredients that must be included \ncanHave: Ingredients that may be included\ncannotHave: Ingredients that cannot be included \n\nCooking Time: Length of the cooking time of the recipe \n\nType of Meal: If a meal is breakfast, entree, or dessert\n\nkeyWords: Other factors \n\nDraw upon your vast knowledge of recipes, and think through this step-by-step to recommend 3 recipe ideas (just the idea, not the full recipe). \nEssential: These must be real recipes that users could find on the internet or recipes inspired from cultural staples, not just fake ones you\'ve made up to fit the criteria. \nFormat your 3 recipe recommendations in the following format. \n\nNumber each recipe\n\nName of Recipe: [Name of Recipe]\nCooking Time: [Cooking Time] \nIngredients Typically Used: [Ingredients Used]\n1-2 sentence description of the recipe. You are speaking to a general audience, so make the description sound appealing but do not use too much cooking jargon.\n\nUser Data is delimited by """\n\n"""\n\nIngredients: \nmustHave: [\'apple\', \'banana\']\ncannotHave: [\'sugar\']\n\nCooking Time::\n<25 min\n\nType of Meal: \nSnack/Appetizer\n\nkeyWords: \n[]\n\n"""\n\nCurate 3-5 recommendation ideas\n', 'request_type': 'language-model-inference', 'temperature': 0.7, 'top_p': 0.7, 'top_k': 50, 'repetition_penalty': 1, 'stop': ['[/INST]', '</s>'], 'negative_prompt': '', 'sessionKey': '2e59071178ae2b05e68015136fb8045df30c3680'}, 'subjobs': [], 'output': {'choices': [{'text': '\n(Note: The user data is not exhaustive. You may need to make some assumptions about what the user might like based on the information provided.)\n\nRecipe 1:\nName of Recipe: Apple-Banana Fritters\nCooking Time: 15 min\nIngredients Typically Used: Apple, banana, flour, eggs, milk, cinnamon, nutmeg\nDescription: A sweet and satisfying snack that combines the natural sweetness of apples and bananas with a hint of cinnamon and nutmeg.\n\nRecipe 2:\nName of Recipe: Apple-Banana Smoothie\nCooking Time: 5 min\nIngredients Typically Used: Apple, banana, yogurt, milk, honey\nDescription: A refreshing and healthy drink that blends the goodness of apples and bananas with the creaminess of yogurt and a touch of honey.\n\nRecipe 3:\nName of Recipe: Apple-Banana Oat Bars\nCooking Time: 20 min\nIngredients Typically Used: Apple, banana, oats, eggs, almond butter, honey\nDescription: A tasty and filling snack bar that combines the flavors of apples and bananas with the nutritional benefits of oats and almond butter. Perfect for a quick energy boost on-the-go.'}], 'request_id': '81d788def8a8251d-SJC'}}
    generated_text = [choice["text"] for choice in res_json["output"]["choices"]]
    
    return generated_text

def find_recipes(recipe):
    recipes = []
    for result in search(recipe, num_results=5, advanced=True):
        recipes.append(result)
    return recipes

# dishes = generate_recs(2)
# print(dishes)
# print(dishes[0].split("\n\n")[1:])