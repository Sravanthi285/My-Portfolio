import os
import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load resume data
with open("data/resume.json", "r") as f:
    resume_data = json.load(f)

# OpenRouter Configuration
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY,
)

class ChatRequest(BaseModel):
    message: str
    history: list = []

@app.get("/")
def read_root():
    return {"message": "Portfolio Backend API"}

@app.post("/chat")
async def chat(request: ChatRequest):
    if not OPENROUTER_API_KEY:
        return {"response": "I'm sorry, the AI chat is currently unavailable because the API key is not configured. (Developer: Please set OPENROUTER_API_KEY in the backend .env file)"}

    system_prompt = f"""
    You are an AI assistant for {resume_data['name']}'s personal portfolio. 
    Your goal is to answer questions about {resume_data['name']}'s resume, experience, skills, and projects accurately and professionally.
    Use the following resume data as your primary source of truth:
    {json.dumps(resume_data, indent=2)}
    
    If someone asks a question not related to the resume, politely redirect them to ask about {resume_data['name']}'s work.
    Keep your responses concise and friendly.
    """

    messages = [{"role": "system", "content": system_prompt}]
    for msg in request.history:
        messages.append(msg)
    messages.append({"role": "user", "content": request.message})

    try:
        response = client.chat.completions.create(
            model="google/gemini-2.0-flash-lite-001",
            messages=messages,
        )
        return {"response": response.choices[0].message.content}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
