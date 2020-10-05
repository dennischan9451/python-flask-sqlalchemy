from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import TimeoutException, NoAlertPresentException, NoSuchElementException
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.remote.webdriver import WebDriver as RemoteWebDriver
from selenium.webdriver.firefox.options import Options
from bs4 import BeautifulSoup
import mysql.connector
import time
import random
import os
from multiprocessing import Process
import sys
import requests
from datetime import date, timedelta, datetime
from pandas import DataFrame
from app.mod_bot.CAPTCHA_object_detection import *

def get_extra_pv_link(popup_info):
    popup_info = popup_info.replace("open_detail(\'", '')
    return popup_info.replace("\');return false;", '')
    
class Scrapper:
    def __init__(self):
        self.domain = "https://eworld.dxn2u.com/"
        self.login_url = "index.php?r=site/login&amp;amp;ajax=0"
        # For production
        # self.ppv_url = "ebizsite/ppvreportmem&parentmenu=107"
        # For development
        self.ppv_url = "https://emarketing.dxn2u.com/ebizsite/gpvreportnextgen?parentmenu=107"
        self.today = date.today()
        self.date=self.today.strftime("%b%d%Y")
        self.now = datetime.now()
        self.datetime=self.now.strftime("%Y-%m-%d %H:%M:%S")
        self.cookies = {}
        self.headers = {
            "Accept": "text/html, */*; q=0.01", 
            "Accept-Encoding": "gzip, deflate, br", 
            "Accept-Language": "en-US,en;q=0.9", 
            "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "emarketing.dxn2u.com", 
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.100 Safari/537.36"
        }
        self.ppv_data = {}
        self.ppv_extra_data = {}
        
    def log(self, message):
        print("[" + self.datetime + "] " + "INFO : " + message) 

    def configure_web_driver(self):
        options = Options()
        # options.headless = True

        # Ubuntu Switch
        self.driver = webdriver.Firefox(options=options, executable_path=os.path.dirname(os.path.abspath(__file__)) + '\geckodriver.exe')
        # self.driver = webdriver.Firefox(options=options, executable_path="/usr/local/bin/geckodriver", options=options)
        self.driver.set_page_load_timeout("10")
        self.driver.set_window_size(1341,810)
    
    def login(self, code, password):
        try:
            self.driver.get(self.domain+self.login_url)
            time.sleep(3)

        except Exception as e:
            print(e)
            self.driver.close()
            return "Oops! Something went wrong,please try again !"

        #input credentials
        self.log("Login")
        try:
            self.driver.find_element_by_id("dxnloginform-username").send_keys(code)
            time.sleep(1)
            self.driver.find_element_by_id("dxnloginform-password").send_keys(password)
            time.sleep(1)

            # Download Captcha Image
            image_url = self.driver.find_element_by_xpath(".//img[@id='dxnloginform-captcha-image']").get_attribute("src")
            image_name = os.path.dirname(os.path.abspath(__file__)) + "\captcha.png"
            
            self.log("Downloading image")

            with open(image_name, 'wb') as file:
                try:
                    file.write(self.driver.find_element_by_xpath(".//img[@id='dxnloginform-captcha-image']").screenshot_as_png)
                except Exception as e:
                    print(e)
                    self.driver.close()
                    return "Oops! Something went wrong,please try again !"
        except Exception as e:
            print(e)
        
        try:
            captcha_string = Captcha_detection(image_name)
            time.sleep(4)
            self.driver.find_element_by_id("dxnloginform-captcha").send_keys(captcha_string)
            time.sleep(1)
            self.driver.find_element_by_id("dxnloginform-captcha").send_keys(Keys.ENTER)
            time.sleep(5)
            # Get Cookies
            cookies_list = self.driver.get_cookies()
            for cookie in cookies_list:
                self.cookies[cookie['name']] = cookie['value']
        except Exception as e:
            print(e)
        self.driver.close()
        return ""
    
    def scrape_ppv(self, code):
        time.sleep(1)
        try:
            self.log("Scraping Data...")
            # Get pass
            session = requests.Session()
            
            page = session.get(self.ppv_url, cookies=self.cookies, headers=self.headers)
            
            if page.status_code == 200:
                soup = BeautifulSoup(page.text, 'html.parser')
                pass_hash = soup.find('input', {'id': 'pass'}).get('value')
                memcode = soup.find('input', {'id': 'memcode'}).get('value')
                cnt = soup.find('input', {'id': 'cnt'}).get('value')
                mode_view = soup.find('input', {'id': 'mode_view'}).get('value')
                lang = soup.find('input', {'id': 'lang'}).get('value')
                
            else:
                return "Oops! Failed to retrive data, please try again !"
            
            gen_list = []
            code_list = []
            name_list = []
            ppv_list = []
            ppgv_list = []
            tgpv_list = []
            agpv_list = []
            dgpv_list = []
            ranking_status_list = []
            distributor_status_list = []
            sponsor_list = []
            sponsor_name_list = []
               
            gotopage = 0    
            
            result = {}
            country_extra_list = []
            code_extra_list = []
            ppv_extra_list = []
            pgpv_extra_list = []
            
            while True:
                
                payload = {
                    'country_pv': 'BR',
                    'show_max_gen': 0,
                    'ranking_filter': 0,
                    'status_filter': 0,
                    'select_sequence': 1,
                    'record_per_page': 50,
                    'search_for': 3,
                    'gotopage': gotopage,
                    'purl': '',
                    'see_sponsor': '', 
                    'memcode': memcode,
                    'cnt': cnt,
                    'lang': lang,
                    'mode_view': mode_view,
                    'pass': pass_hash
                }
            
                page = session.post('https://emarketing.dxn2u.com/ebizmod/rpt3_gpvnextgenmem.php', cookies=self.cookies, headers=self.headers, data=payload)
                if page.status_code == 200:
                    soup = BeautifulSoup(page.text, 'html.parser')
                    # table = soup.find('table', {'class': 'table table-bordered table-striped'})
                    tbody = soup.find('tbody')
                    table_rows = tbody.find_all('tr')
                    if len(table_rows) == 1 and "No Records Found" in table_rows[0].get_text():
                        print(gotopage, table_rows[0].get_text())
                        break
                    
                    self.log("Getting PPV DATA ... Page: " + str(gotopage))
                    for row in table_rows:
                        row_fields = row.find_all('td')
                        if "**" in row_fields[2].get_text():
                            extra_pv_link = get_extra_pv_link(row_fields[2].find('a')['onclick'])
                            page_extra = session.get('https://emarketing.dxn2u.com/{}'.format(extra_pv_link), cookies=self.cookies, headers=self.headers)
                            if page_extra.status_code == 200:
                                soup_extra = BeautifulSoup(page_extra.text, 'html.parser')
                                table_extra = soup_extra.find('table', {'class': 'table table-bordered'})
                                trs = table_extra.find_all('tr')
                                for tr in trs:
                                    tds = tr.find_all('td')
                                    country = tds[0].get_text().strip()
                                    if country.lower() == "country":
                                        continue
                                    ppv = tds[1].get_text().strip()
                                    pgpv = tds[2].get_text().strip()
                                    country_extra_list.append(country)
                                    code_extra_list.append(row_fields[2].get_text().strip())
                                    ppv_extra_list.append(ppv)
                                    pgpv_extra_list.append(pgpv)
                            else:
                                print('Error occured. {}'.format(extra_pv_link))
                        gen_list.append(row_fields[1].get_text().strip())
                        code_list.append(row_fields[2].get_text().strip())
                        name_list.append(row_fields[3].get_text().strip())
                        ppv_list.append(row_fields[4].get_text().strip())
                        ppgv_list.append(row_fields[5].get_text().strip())
                        tgpv_list.append(row_fields[6].get_text().strip())
                        agpv_list.append(row_fields[7].get_text().strip())
                        dgpv_list.append(row_fields[9].get_text().strip())
                        ranking_status_list.append(row_fields[10].get_text().strip())
                        distributor_status_list.append(row_fields[12].get_text().strip())
                        sponsor_list.append(row_fields[14].get_text().strip())
                        sponsor_name_list.append(row_fields[15].get_text().strip())
                        
                    gotopage += 1
                else:
                    return "Oops! Failed to retrive data, please try again !"
            
            if len(gen_list) == 0:
                return "Oops! Any ppv data does not exist!"
            
            self.ppv_data = {
                "Gen": gen_list,
                "Code" : code_list,
                "Full Name" : name_list,
                "PPV" : ppv_list,
                "PGPV" : ppgv_list,
                "TGPV" : tgpv_list,
                "Accumulated GPV" : agpv_list,
                "DGPV" : dgpv_list,
                "Ranking Status" : ranking_status_list,
                "Distributor Status" : distributor_status_list,
                "Sponsor" : sponsor_list,
                "Sponsor Name" : sponsor_name_list,
            }

            df = DataFrame(self.ppv_data)
            df.to_excel(os.path.dirname(os.path.abspath(__file__))+"\ppv_data.xlsx")
                
            self.ppv_extra_data = {
                "Country": country_extra_list,
                "Code": code_extra_list,
                "PPV": ppv_extra_list,
                "PGPV": pgpv_extra_list
            }
            
            df_extra = DataFrame(self.ppv_extra_data)
            df_extra.to_excel(os.path.dirname(os.path.abspath(__file__))+"\ppv_extra_data.xlsx")
            
        except Exception as e:
            print(e)
            return "Oops! Failed to retrive data, please try again !"
        # For now, we use previous qualification for testing
        return ""
    