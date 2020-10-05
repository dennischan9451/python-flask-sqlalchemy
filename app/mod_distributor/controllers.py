# Import flask dependencies
from flask import Blueprint, request, render_template, flash, g, session, redirect, url_for, jsonify

# Import the database object from the main app module
from app import db

# Import Applicatoin name
from app import app_name

from app.mod_bot import scraping_bot as Bot
from app.mod_bot import bonus_calc as Bonus

# Define the blueprint: 'auth', set its url prefix: app.url/auth
mod_distributor = Blueprint('home', __name__, url_prefix='/user/')

@mod_distributor.route('/bonus', methods=["POST"])
def bonus():
    code = request.form['code']
    password = request.form['password']
    scrapper = Bot.Scrapper()
    scrapper.configure_web_driver()
    alert = scrapper.login(code, password)
    ppv_data = scrapper.scrape_ppv(code)
    # First calculate local bonus
    # bonus = scrapper.bonus_calc()
    return jsonify(
        status=True,
        bonus=63.25
    )
    
# Set the route and accepted methods
@mod_distributor.route('/home/', methods=['GET', 'POST'])
def index():
    if not session.get('logged_in'):
        return redirect('/')
    pages = generate_page_list()
    return render_template("user/home.html", app_name=app_name, pages = pages, name = "Home")

@mod_distributor.route('/network/', methods=['GET', 'POST'])
def network():
    pages = generate_page_list()
    return render_template("user/network.html", app_name=app_name, pages = pages, name = "My Network")

@mod_distributor.route('/plan/', methods=['GET', 'POST'])
def plan():
    pages = generate_page_list()
    return render_template("user/plan.html", app_name=app_name, pages = pages, name = "My Plan")

@mod_distributor.route('/members/', methods=['GET', 'POST'])
def members():
    pages = generate_page_list()
    return render_template("user/members.html", app_name=app_name, pages = pages, name = "My Members")

@mod_distributor.route('/logout')
def logout():
    session['logged_in'] = False
    return redirect('/')

# Functions
def generate_page_list():
    pages = [
        {   
            "name": "Home", 
            "url": "/user/home/",
            "icon" : "fa-laptop"
        },
        {   
            "name": "My Network", 
            "url": "/user/network/",
            "icon" : "fa-area-chart"
        },
        {   
            "name": "My Plan", 
            "url": "/user/plan/",
            "icon" : "fa-calendar-check-o"
        },
        {   
            "name": "My Members", 
            "url": "/user/members/",
            "icon" : "fa-users"
        }
    ]
    return pages