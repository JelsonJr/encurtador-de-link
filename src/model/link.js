"use strict";

const crypto = require("crypto");

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function generateShortCode() {
  return crypto.randomBytes(4).toString("hex");
}

module.exports = {
  isValidUrl,
  generateShortCode,
};
