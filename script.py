# Подключаем библиотеки
import httplib2 
import apiclient.discovery
from oauth2client.service_account import ServiceAccountCredentials	
import pygsheets

CREDENTIALS_FILE = 'landing-lt-c4d50510ee8a.json'  # Имя файла с закрытым ключом, вы должны подставить свое

gc = pygsheets.authorize(service_file=CREDENTIALS_FILE)

sh = gc.open_by_key('1QNBh2hS8FfjnIyEoBQV2pr1zwv1CD2Jkh5hWqxqWNI8')

new_row = ['firstname', 'lastname', 'Email', 'Number']
wk = sh.sheet1
cells = wk.get_all_values(include_tailing_empty_rows=False, include_tailing_empty=False, returnas='matrix')
last_row = len(cells)
print(last_row)
worksheet = wk.insert_rows(last_row, number=1, values= new_row)
# Читаем ключи из файла

'''
credentials = ServiceAccountCredentials.from_json_keyfile_name(CREDENTIALS_FILE, ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'])

httpAuth = credentials.authorize(httplib2.Http()) # Авторизуемся в системе
service = apiclient.discovery.build('sheets', 'v4', http = httpAuth) # Выбираем работу с таблицами и 4 версию API 

spreadsheet = service.spreadsheets().create(body = {
    'properties': {'title': 'Первый тестовый документ', 'locale': 'ru_RU'},
    'sheets': [{'properties': {'sheetType': 'GRID',
                               'sheetId': 0,
                               'title': 'Лист номер один',
                               'gridProperties': {'rowCount': 100, 'columnCount': 15}}}]
}).execute()
spreadsheetId = spreadsheet['spreadsheetId'] # сохраняем идентификатор файла
print('https://docs.google.com/spreadsheets/d/' + spreadsheetId)

driveService = apiclient.discovery.build('drive', 'v3', http = httpAuth) # Выбираем работу с Google Drive и 3 версию API
access = driveService.permissions().create(
    fileId = spreadsheetId,
    body = {'type': 'user', 'role': 'writer', 'emailAddress': 'moonland144@gmail.com'},  # Открываем доступ на редактирование
    fields = 'id'
).execute()
'''