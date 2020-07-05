const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const basicAuth = require("basic-auth-connect");

const app = express();

app.all(
  "/*",
  basicAuth(function (user, password) {
    return user === `${functions.config().basicauth.user}` && password === `${functions.config().basicauth.password}`;
  })
);

app.use(express.static(path.resolve(__dirname, "dist")));

exports.app = functions.https.onRequest(app);
