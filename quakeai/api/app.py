import os
from flask import Flask, render_template, request
import openai

# Initialize Flask app
app = Flask(__name__)

# Configure your OpenAI API key
openai.api_key = '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'

# Define a route for the home page
@app.route('/')
def home():
    return render_template('index.html')

# Define a route to handle user input and generate a response
@app.route('/generate_response', methods=['POST'])
def generate_response():
    user_input = request.form['user_input']

    # Use the OpenAI GPT-3 API with "gpt-3.5-turbo" engine
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant."
            },
            {
                "role": "user",
                "content": user_input
            }
        ]
    )

    generated_text = response['choices'][0]['message']['content']

    return render_template('index.html', user_input=user_input, generated_text=generated_text)

