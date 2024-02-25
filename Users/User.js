const axios = require("axios");

async function User(id) {
  console.log("userId", id);
  try {
    const res = await axios.get(`http://localhost:3000/users/${id}`);
    return res.data;
  } catch (e) {
    console.log("error", e.message);
  }
}

module.exports.User = User;
