from flask import Flask, Response, jsonify
import json

app = Flask(__name__)


@app.route("/api/places", methods=["GET"])
def api_places():
    data = {"from the places": "world yeah"}
    js = json.dumps(data)

    return Response(js, status=200, mimetype="application/json")


@app.route("/<path:path>")
def catch_all(path):
    print(f"Catch all - {path}")
    data = {}
    js = json.dumps(data)

    return Response(js, status=200, mimetype="application/json")


if __name__ == "__main__":
    app.run(debug=True)
