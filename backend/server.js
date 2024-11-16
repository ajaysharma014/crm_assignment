require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {connectDB} = require("./db.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();
app.use(cors());
app.use(cors({
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
}));
app.use(bodyParser.json());
const port = process.env.PORT || 5000;
connectDB();
const allowedOrigins = ['https://example.com', 'https://another-example.com'];

app.use("/api", contactRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
