from flask import Flask, render_template
from flask import jsonify
import stripe

app = Flask(__name__)


stripe.api_key = 'sk_test_vITj7P41JnY4piHcuGR0np3000GZa83eH1'



@app.route('/')
@app.route('/donate')
@app.route('/mission')
@app.route('/issue')
@app.route('/request')
@app.route('/volunteer')
@app.route('/contact')
@app.route('/progress')
@app.route('/approach')
@app.route('/our-story')
@app.route('/people')
def hello_world():
    return app.send_static_file('index.html')






if __name__ == '__main__':
    app.run(debug=True)


