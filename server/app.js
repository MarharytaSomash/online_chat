const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const bodyParser = require("body-parser");
const app = express();
const xss = require("xss-clean");
const cors = require("cors");
app.use(express.json({ limit: "10kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "PUT", "PATCH", "DELETE", "POST"],
        credentials: true,
    }),
);

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(mongoSanitize());
app.use(xss());
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
const limiter = rateLimit({
    max: 3000,
    windowMs: 60 * 60 * 1000,

    message: "To many request from this IP",
});
app.use("/talk", limiter);

module.exports = app;
