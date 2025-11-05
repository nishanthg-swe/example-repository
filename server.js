import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Welcome to the Home Page...");
});

app.post("/submitreview", (req, res) => {
    res.redirect("/")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});