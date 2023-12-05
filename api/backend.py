
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import cv2
import base64
import requests

app = FastAPI()
api_key = "API_KEY"  # replace this with chatgpt api 


gpt_prompt = """You are a student card classifier. You will be presented with an image and you will have to classify it as “Student Card” or “Not Student Card“. You should only answer as “Student Card” or “Not Student Card“. You should not include any other words or symbols excepts these words.
"""


gpt_test_prompt = """What is the meaning of life?
"""

@app.get("/")
# Function to send the image to ChatGPT Vision API
def send_image_to_chatgpt():
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": f"{gpt_prompt}"
                    }
                ]
            }
        ],
        "max_tokens": 300
    }

    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    return response.json()



@app.post("/send_image_to_chatgpt")
# Function to send the image to ChatGPT Vision API
def send_image_to_chatgpt(base64_image):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    payload = {
        "model": "gpt-4-vision-preview",
        "messages": [
            {
                "role": "user",
                "content": [
                    {
                        "type": "text",
                        "text": f"{gpt_prompt}"
                    },
                    {
                        "type": "image_url",
                        "image_url": {
                            "url": f"data:image/jpeg;base64,{base64_image}"
                        }
                    }
                ]
            }
        ],
        "max_tokens": 300
    }

    response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    return response.json()

