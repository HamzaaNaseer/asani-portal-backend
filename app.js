const express = require("express");
const app = express();

//routes import
const userRoutes = require("./routes/userRoute");
const announcementRoutes = require("./routes/announcementsRoute");

//this middleware is used so we can read incoming json data
app.use(express.json());

app.use("/api/v1", userRoutes);
app.use("/api/v1", announcementRoutes);
module.exports = app;
