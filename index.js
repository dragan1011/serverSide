const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const logoutRouter = require("./routes/logout");
const vehicleRouter = require("./routes/vehicle");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://localhost:8080"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "sistem",
    resave: false,
    saveUninitialized: false,
    /* cookie: {
      expires: 60 * 60 * 24,
    }, */
  })
);

app.use("/", authRouter);
app.use("/", usersRouter);
app.use("/", logoutRouter);
app.use("/", vehicleRouter);

app.listen(3000, () => {
  console.log("Server je pokrenut");
});
