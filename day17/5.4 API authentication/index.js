import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

const yourUsername = "chloe";
const yourPassword = "lovecoding";
const yourAPIKey = "65dcb6e-0bf7-4d61-9163-287f39880828";
const yourBearerToken = "ed529f1d-ce60-400b-ad7b-c529cb9f5bdb";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error) {
    console.error(error);
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
  try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error) {
    console.error(error);
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error){
    console.error(error);
    res.status(404).send(error.message);
  }

});

const config = {
  headers: {
     "Authorization": `Bearer ${yourBearerToken}`},
};

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL + "/secrets/2", config)
    res.render("index.ejs", { content: JSON.stringify(result.data) });

  } catch (error){
    console.error(error);
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
