import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h2>Hello</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h2>My name is Chloe</h2>");
})

app.get("/contact", (req, res) => {
  res.send("<h2>My twitter is @chloe_zhux</h2>");
})

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})





// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Angela</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
