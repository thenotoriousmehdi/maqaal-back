from fastapi import FastAPI,status,Depends
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

from database import Session,engine
from schemas import SignUpModel
from models import User

from routers import users,articles

from fastapi.exceptions import HTTPException
from werkzeug.security import generate_password_hash , check_password_hash
from fastapi.encoders import jsonable_encoder


import os
import secrets
import subprocess
import pandas_read_xml as pdx
import xmltodict, json
import xml.etree.ElementTree as ET

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(articles.router)

async def run_cermine_extraction():
    command = [
        'java',
        '-cp', './cermine-impl-1.13-jar-with-dependencies.jar',
        'pl.edu.icm.cermine.ContentExtractor',
        '-path', 'pdfFiles'
    ]

    result = subprocess.run(command, capture_output=True, text=True, check=True)

 

#temp postion (should be in router)
@app.get('/article/extract/{fileName}')
async def extract(fileName:str):  

    print(fileName)

    try:
       await run_cermine_extraction()
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print(f"Output: {e.output}")

    #time to send response 

    fileNameExtbar = fileName.split(".")[0]
    print(fileNameExtbar)
    
    """ with open(f"./pdfFiles/{fileNameExtbar}.cermxml", 'r', encoding='utf-8') as file:
        xml_content = file.read()

    print(xml_content) """
    
#extract data from xml , format it as json , then index it                              

    # Parse the XML file

    from lxml import etree
    import json

    tree = etree.parse(f"./pdfFiles/{fileNameExtbar}.cermxml")
    root = tree.getroot()

    sections = []
    auteurs = []
    institutions = []
    

    articleTitle = root.find(".//article-title")
    print(articleTitle.text)
    DocumentTitle = articleTitle.text

    for item in root.findall(".//contrib"):
        auteur = item.find(".//string-name")
        auteurs.append(auteur.text)

    print(auteurs)

    for item in root.findall(".//aff"):
        instut = item.find(".//institution")
        institutions.append(instut.text)
        print(institutions)

    abstract=root.find(".//abstract")
    
    try:
        summary=abstract.text
    except Exception as e:
        summary = "no"
        print("elem does not have abstract tag")

    sections = []

    for item in root.findall(".//sec"):
        section_title = item.find(".//title")

        # Remove the <xref> elements and their content within the current <sec>
        for xref in item.xpath('.//xref'):
            xref.getparent().remove(xref)

        # Extract the modified text content of the <p> elements within the current <sec>
        paragraphs = []
        for p_element in item.findall(".//p"):
            paragraph_text = ''.join([element for element in p_element.xpath('.//text()')])
            paragraph_text = paragraph_text.replace('[', '').replace(']', '')
            paragraphs.append(paragraph_text)

        section = {
            "title": section_title.text if section_title is not None else "",
            "paragraphs": paragraphs
        }

        sections.append(section)

     


    # Extracting fields and creating a one-line string
    """  ref_id = root.get('id')
    given_names = root.find('.//given-names').text
    surname = root.find('.//surname').text
    year = root.find('.//year').text
    article_title = root.find('.//article-title').text
    source = root.find('.//source').text
    volume = root.find('.//volume').text
    issue = root.find('.//issue').text
    fpage = root.find('.//fpage').text
    lpage = root.find('.//lpage').text

    # Concatenate the extracted fields into a single line string
    result_string = f"Ref ID: {ref_id}, Given Names: {given_names}, Surname: {surname}, Year: {year}, " \
                    f"Article Title: {article_title}, Source: {source}, Volume: {volume}, " \
                    f"Issue: {issue}, First Page: {fpage}, Last Page: {lpage}" """


    """ result_dict = {
        "DocumentTitle": DocumentTitle,
        "Auteurs": auteurs,
        "Institutions": institutions,
        "Abstract": summary,
        "Sections": sections,
        "ResultString": result_string,
    }
 """
    # Specify the separator character
    separator = ', '

    # Initialize an empty string to store the result
    result_string_aut = ""
    result_string_Inst = ""

    for element in auteurs:
        result_string_aut += element + separator
    
    for element in institutions:
        result_string_Inst += element + separator
    

    result_dict = {
        "DocumentTitle": DocumentTitle,
        "Auteurs": result_string_aut,
        "Institutions": result_string_Inst,
        "Abstract": summary,
        "Sections": sections
    }

    json_result = json.dumps(result_dict, indent=2)

    #writing to file 
    with open(f"./routers/articles_To_index.json", 'r') as file:
        data = json.load(file)
        
    data["data"].append(json_result)
     
    with open(f"./routers/articles_To_index.json", 'w') as file:
        json.dump(data, file, indent=2)
    

    return({"data":"extarction"})

@app.get("/")
async def main():
    return {"message":"hello from main"}

