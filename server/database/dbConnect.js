const mongoose = require("mongoose");

// Database connection logic, written clean.
const dbConnect = async (uri) => {
  try {
    await mongoose
      .connect(uri)
      .then(console.log("Successfully connected to the database"));
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = dbConnect;
