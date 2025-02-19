const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();


const routeTestMiddleware = (req, res, next) => {
  const testValidation = req.query.test_validation;
  const currentDate = new Date().toUTCString();
  console.log(`Test validation: ${testValidation}`);
  console.log(`Route: ${req.originalUrl}`);
  console.log(`Timestamp: ${currentDate}`);
  next(); 
};


app.get("/route_test", routeTestMiddleware, (req, res) => {
  res.send("Route test successful!");
});

app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.use((req, res) => {
  res.status(404).send("Page not found");
});
