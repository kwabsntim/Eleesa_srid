from flask import Flask,render_template,url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('eleesa.html')
@app.route("/executives")
def executives():
    return render_template('executives.html')

if __name__ == '__main__':
    app.run(debug=True)