# System imports
import os

# Third-party imports
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import uvicorn

# Local imports

# Create the FastAPI app
app = FastAPI(title="SvelteKit FastAPI")

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Basic test route
@app.get("/")
async def root():
    return {"message": "Hello World"}


# Run the app
if __name__ == "__main__":
    uvicorn.run(
        "main:app", host="localhost", port=5657, proxy_headers=True, reload=True
    )
