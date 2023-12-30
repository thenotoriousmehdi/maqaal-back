from fastapi import FastAPI, UploadFile, File
import subprocess

app = FastAPI()

def extract_text_from_pdf(pdf_path):
    
    cermine_jar_path = "mbp-de-mehdi/Bureau/cermine-impl-1.13-jar-with-dependencies.jar"

    
    command = f"java -cp {cermine_jar_path} pl.edu.icm.cermine.ContentExtractor -path {pdf_path}"

    try:
      
        result = subprocess.run(command, shell=True, capture_output=True, text=True, check=True)

     
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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)






