from flask import Flask, render_template, request
from flask_socketio import SocketIO, send
import json

app = Flask(__name__, static_url_path="/static")
app.config['SECRET'] = "secret!123"
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():  # put application's code here
    return render_template("index.html")

@socketio.on('message')
def handle_message(message):
    print("Received message: " + message)
    if "User connected!" not in message:
        term_info = json.loads(message)
        print(term_info["user"])


if __name__ == '__main__':
    app.run()

