from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html',title='home',name='aarati')

@app.route('/about')
def about():
    skills = ["HTML", "CSS", "JavaScript", "Flask", "Python"]
    return render_template('about.html', title='About', skills=skills)


@app.route('/contact')
def contact():
    return render_template('contact.html',title='contact')

@app.route('/services')
def services():
    return render_template('services.html',title='services')

@app.route('/layout')
def layout():
    return render_template('layout.html',title='layout' )

if __name__ == '__main__':
    app.run(debug=True)
