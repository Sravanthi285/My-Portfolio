# Walkthrough - Personal Portfolio with AI Chat

I have successfully built the Portfolio website. The project is organized into two main parts: the **Frontend** (React) and the **Backend** (FastAPI).

## 🚀 How to Run the Project

### 1. Backend Setup (Python)
> [!IMPORTANT]
> You MUST enter the `backend` folder first.

1.  Open your terminal in the `sravanthi-portfolio-submission` folder.
2.  **Move into the backend folder**:
    ```bash
    cd backend
    ```
3.  **Install dependencies**:
    ```bash
    pip install -r requirements.txt
    ```
4.  **Run the server**:
    ```bash
    python main.py
    ```
    *The backend will start on `http://localhost:8000`*

---

### 2. Frontend Setup (React)
> [!IMPORTANT]
> You MUST enter the `frontend` folder first.

1.  Open a **SECOND** terminal window in the `sravanthi-portfolio-submission` folder.
2.  **Move into the frontend folder**:
    ```bash
    cd frontend
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Start the dev server**:
    ```bash
    npm run dev
    ```
    *The frontend will start on `http://localhost:5173`*

---

## 🛠️ Configuration
Make sure your API key is set in `backend/.env`:
`OPENROUTER_API_KEY=sk-or-v1-7941320...`

## Project Features
- **Modern UI**: Dark theme with glassmorphism.
- **AI Chat**: Answers questions about your resume using OpenRouter + Gemini.
- **Responsive**: Works on mobile and desktop.
