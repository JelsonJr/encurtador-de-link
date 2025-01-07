"use strict";

const {
  createShortLink,
  getLinkByShortCode,
  getLinkByOriginalUrl,
} = require("./database");
const { isValidUrl, generateShortCode } = require("./model/link");
const { getBody, sendResponse } = require("./utils");

async function shortenLink(event) {
  try {
    const { url } = getBody(event);

    if (!isValidUrl(url)) {
      return sendResponse(
        {
          message: "Invalid URL",
        },
        400
      );
    }

    const existingLink = await getLinkByOriginalUrl(url);

    if (existingLink) {
      return sendResponse({
        shortUrl: `${process.env.BASE_URL}/${existing.shortCode}`,
        message: "Link already exists",
      });
    }

    const shortCode = generateShortCode();
    await createShortLink(url, shortCode);

    return sendResponse(
      {
        shortUrl: `${process.env.BASE_URL}/${shortCode}`,
        message: "Link created successfully",
      },
      200
    );
  } catch (error) {
    return sendResponse(
      {
        message: error.message,
      },
      500
    );
  }
}

async function redirect(event) {
  const shortCode = event.pathParameters.shortCode;

  try {
    const link = await getLinkByShortCode(shortCode);

    if (!link) {
      return sendResponse(
        {
          message: "Link not found",
        },
        404
      );
    }

    return sendResponse({}, 301, {
      Location: link.originalUrl,
    });
  } catch (error) {
    return sendResponse(
      {
        message: error.message,
      },
      500
    );
  }
}

module.exports = { shortenLink, redirect };
