# RetroChat

RetroChat is a 90s-style chatbot web app that lets users chat with AI personas modeled after iconic figures like Buddha, Tony Stark, Socrates, Shinchan, and Doraemon. Each chat simulates the tone and style of the selected personality, wrapped in a nostalgic retro-Windows aesthetic.

*This project is currently under development and not yet deployed.*


## Tech Stack

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Node.js, Express
- **Libraries**: Axios, dotenv, CORS
- **LLM API**: Groq (LLaMA 3 8B 8192)


## Features

- Sidebar chat menu with **"New Chat"** functionality  
- Hardcoded persona dropdown (Buddha, Stark, Socrates, Shinchan, Doraemon)  
- Chatbot responses mimic each figure’s unique tone and speech style  
- Retro Windows-inspired UI design


## Project Status

RetroChat is not deployed yet due to:
- Ongoing modular restructuring
- Compatibility issues on Windows 7 (CommonJS vs ESM conflict)
- Deployment limitations on current dev environment


## Planned Improvements

- Convert codebase to consistent module format (ESM)
- Finalize persona prompt-tuning logic
- Resolve deployment constraints (target: Vercel or similar)


## Design Inspiration

- UI: Windows 95/98-style digital interfaces  
- Interaction: Creative persona-based conversation experience
