from fastapi import FastAPI, UploadFile, File
from . import models
from .database import engine
from .routers import post, auth
import subprocess
from fastapi.middleware.cors import CORSMiddleware


from dotenv import load_dotenv

load_dotenv()


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(post.router)
app.include_router(auth.router)


def extract_text_from_pdf(pdf_path):
    cermine_jar_path = "mbp-de-mehdi/Bureau/cermine-impl-1.13-jar-with-dependencies.jar"

    command = f"java -cp {cermine_jar_path} pl.edu.icm.cermine.ContentExtractor -path {pdf_path}"

    try:
        result = subprocess.run(
            command, shell=True, capture_output=True, text=True, check=True
        )

        extracted_text = result.stdout.strip()

        return extracted_text

    except subprocess.CalledProcessError as e:
        print(f"Error while extracting text: {e}")
        return None


@app.post("/extract-text")
async def extract_text(file: UploadFile = File(...)):
    temp_pdf_path = f"mbp-de-mehdi/Bureau/cerminetest.pdf"
    with open(temp_pdf_path, "wb") as pdf_file:
        pdf_file.write(file.file.read())

    extracted_text = extract_text_from_pdf(temp_pdf_path)

    return {"extracted_text": extracted_text}


@app.get("/")
# async
def root():
    return {"message": "Hello simou lbimou"}
