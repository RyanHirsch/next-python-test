from flask import Flask, Response, jsonify
from werkzeug.contrib.fixers import ProxyFix
import json

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)


@app.route("/api/people")
def api_people():
    data = {"bye": "world", "number": 3}
    js = json.dumps(data)

    resp = Response(js, status=200, mimetype="application/json")
    resp.headers["Link"] = "http://luisrei.com"
    resp.status_code = 200

    return resp


@app.route("/<path:path>")
def catch_all(path):
    print(f"Catch all - {path}")
    data = {"caught": path}
    js = json.dumps(data)

    return Response(js, status=200, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
