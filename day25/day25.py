from flask import Flask, render_template, request


app = Flask(__name__)
@app.route('/')
def home():
    return render_template('day25.html')

@app.route('/day25', methods=['GET', 'POST'])
def day25():
    task = None
    name = None
    email = None

    if request.method == 'POST':
        if 'task' in request.form:
            task = request.form['task']
        if 'name' in request.form and 'email' in request.form:
            name = request.form['name']
            email = request.form['email']
    return render_template('day25.html', task=task, name=name, email=email)

if __name__ == '__main__':
    app.run(debug=True)
