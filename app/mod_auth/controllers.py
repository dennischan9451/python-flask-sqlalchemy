# Import flask dependencies
from flask import Blueprint, request, render_template, flash, g, session, redirect, url_for

# Import password / encryption helper tools
from werkzeug.security  import check_password_hash, generate_password_hash

# Import the database object from the main app module
from app import db

# Import Applicatoin name
from app import app_name

# Import module models (i.e. User)
from app.mod_auth.models import User

# Define the blueprint: 'auth', set its url prefix: app.url/auth
mod_auth = Blueprint('auth', __name__, url_prefix='/auth')

# Set the route and accepted methods
@mod_auth.route('/', methods=['GET', 'POST'])
def index():
    return render_template("auth/signin.html", app_name=app_name)

@mod_auth.route('/signin/', methods=['GET', 'POST'])
def signin():     
    email = request.form.get('email')
    password = request.form.get('password')
    
    user = User.query.filter_by(email=email).first()
    
    if not user or not check_password_hash(user.password, password):
        alert = "Please check your login details and try again."
        return render_template("auth/signin.html", app_name=app_name, alert=alert)
    session['logged_in'] = True
    session['name'] = user.name
    return redirect("/user/home/")
