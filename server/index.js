const path = require("path");
const express = require("express");
const app = express(); // create express app
// configure mongo
const mongoSanitize = require("express-mongo-sanitize");
// initialize db
const { url } = require("./src/config/db.config");
app.use(mongoSanitize());
require("./src/db")(url);

app.set("port", process.env.PORT ?? 5000);
app.set("mode", process.env.NODE_ENV === "development" ? "dev" : "prod");
// add middleware
const errorHandler = require("./src/middlewares/error.middleware");
app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "public")));
app.use(express.static(path.join(__dirname, "client", "build")));
// debug API calls
const morgen = require("morgan");
if (process.env.NODE_ENV === "development") {
  app.use(morgen("dev"));
}
//API routes
const router = require("./src/routes");
app.use("/api", router);
// error handler
app.use(errorHandler);

// start express server on port 5000
const server = require("http").createServer(app);
server.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

// handle unhandled rejected promises
process.on("unhandledRejection", (err) => {
  const logType = app.get("mode") !== "dev" ? "error" : "debug";
  console[logType](`ERROR: ${err.message}`);
  server.close();
});
