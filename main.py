import requests
import uvicorn
import datetime
from fastapi import FastAPI, Cookie, Request, UploadFile, File, Form, Response
from fastapi.responses import JSONResponse, RedirectResponse
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
import os
import shutil
import smtplib
import pygsheets

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates/dist")

gmail_user = 'moonland144'
gmail_password = 'moonland'

CREDENTIALS_FILE = 'landing-lt-c4d50510ee8a.json'
gc = pygsheets.authorize(service_file=CREDENTIALS_FILE)


@app.get('/', response_class=HTMLResponse)
async def main_page(request: Request = None):
	return templates.TemplateResponse("index.html",  {"request": request})


@app.get('/privacy', response_class=HTMLResponse)
async def main_page(request: Request):
	return templates.TemplateResponse("privacy.html",  {"request": request})


@app.get('/success', response_class=HTMLResponse)
async def main_page(request: Request):
	return templates.TemplateResponse("success.html",  {"request": request})


@app.post('/success', response_class=HTMLResponse)
async def main_page(request: Request):
	return templates.TemplateResponse("success.html",  {"request": request})



@app.post("/lead")
async def signup(email: str = Form(...), name: str = Form(...), phone: str = Form(...), request: Request = None):
	print(email, name, phone)
	try:
		server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
		server.ehlo()
		server.login(gmail_user, gmail_password)
		server.sendmail('Lead', 'perkovsky.maxim@gmail.com', f"New Lead\nName: {name}\nEmail: {email}\nPhone: {phone}")
		server.close()
		print ('Email sent!')
	except Exception as e:
		print(e)
		print ('Something went wrong...')


	try:
		new_row = [name, email, phone]
		sh = gc.open_by_key('1QNBh2hS8FfjnIyEoBQV2pr1zwv1CD2Jkh5hWqxqWNI8')
		wk = sh.sheet1
		cells = wk.get_all_values(include_tailing_empty_rows=False, include_tailing_empty=False, returnas='matrix')
		last_row = len(cells)
		worksheet = wk.insert_rows(last_row, number=1, values= new_row)
	except:
		print('Wrong with speedsheet')


	return RedirectResponse(url=f'/success')

