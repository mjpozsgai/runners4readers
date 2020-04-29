from flask import Flask
from flask import jsonify
import stripe

app = Flask(__name__)


stripe.api_key = 'sk_test_vITj7P41JnY4piHcuGR0np3000GZa83eH1'



@app.route('/')
def hello_world():
    return app.send_static_file('index.html')




@app.route('/secret')
def secret():
  intent = stripe.PaymentIntent.create(
  amount=1099,
  currency='usd',
  # Verify your integration in this guide by including this parameter
  metadata={'integration_check': 'accept_a_payment'},
)
  return jsonify(client_secret=intent.client_secret)




if __name__ == '__main__':
    app.run(debug=True)


