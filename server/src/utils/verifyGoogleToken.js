const axios = require("axios");

/**
 * Validate a Google access_token and return basic profile data.
 * Throws if token is invalid/expired.
 */
module.exports = async function verifyGoogleToken(accessToken) {
  try {
    const { data } = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    return {
      googleId: data.sub,
      email: data.email,
      name: data.name,
      picture: data.picture,
    };
  } catch (err) {
    throw new Error("Invalid Google access token");
  }
};
