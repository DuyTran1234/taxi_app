const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./connectDB");
const dotenv = require("dotenv");
const { login, createGuest, update, changeStatusActive } = require("../service/user");

const app = express();

dotenv.config();

const port = process.env.PORT || 8888;

connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => res.send("It's working"));

app.post("/login", async (req, res, next) => {
    const {name, email, phone} = req.body;
    const result = await login({name, email, phone});
    res.send(JSON.stringify(result));
});

app.post("/create-guest", async(req, res, next) => {
    const {name, email, phone, active} = req.body;
    const rs = await createGuest({name, email, phone, active});
    res.send(JSON.stringify(rs));
});

app.post("/update", async (req, res, next) => {
    const {name, email, phone, active} = req.body;
    const result = await update({name, email, phone, active});
    res.send(JSON.stringify(result));
});

app.post("/change-active", async (req, res) => {
    const {phone, otp} = req.body;
    const result = await changeStatusActive({phone, otp});
    res.send(JSON.stringify(result));
});

app.listen(port, () => {
    console.log("Your app running on port " + port);
});