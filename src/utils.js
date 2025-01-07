"use strict";

function getBody(event) {
  if (!event.body) {
    throw new Error("Missing body");
  }

  return JSON.parse(event.body);
}

function sendResponse(body = {}, statusCode = 200, headers = {}) {
  return {
    statusCode,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
}

module.exports = {
  sendResponse,
  getBody,
};
