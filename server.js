import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
app.use(cors());
const Images = {
  first:
    "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2FTimTech.png&w=640&q=75",
  second:
    "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Fjeztech.png&w=640&q=75",
  third:
    "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Fheinryanselmtech.jpeg&w=640&q=75",
  fourth:
    "https://techeducators.co.uk/_next/image?url=%2Fimg%2Fstaff%2Ffrankietech.jpg&w=640&q=75",
};
app.get("/", function (req, res) {
  res.json("welcome to my API");
});

app.get("/images", function (req, res) {
  res.json(Images);
});
app.listen(8080, function (req, res) {
  console.log("you are listening to port 8080");
});
