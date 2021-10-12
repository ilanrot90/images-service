// configure mongoose
const mongoose = require("mongoose");

const connectDB = (MONGODB_URI) => {
  mongoose.Promise = global.Promise;
  mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`MongoDB connected`);
    })
    .catch((err) => {
      console.log(
        "MongoDB connection error. Please make sure MongoDB is running. " + err
      );
      // process.exit();
    });
};

module.exports = connectDB;
