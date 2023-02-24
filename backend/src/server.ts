import express from "express";
import cors from "cors";
import { sample_products } from "./data";

const app = express();
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("api/products", (req, res) => {
    res.send("sample_products");
})

const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})