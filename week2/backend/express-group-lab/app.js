const express = require("express");
const app = express();
const port = 3000;

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(requestLogger);
app.use(unknownEndpoint);

app.get("/textmessage", (req, res) => {
  res.send("This is a simple text response.");
});

app.get("/jsonmessage", (req, res) => {
  const jsonData = {
    name: "setä",
    age: 23,
    city: "Helsinki",
    time: new Date(),
  };
  res.json(jsonData);
});

app.get("/htmlmessage", (req, res) => {
  let times = 0;
  times += 1;
  const h1 = `
  <h1>Logged in: ${times} times.
  `;
  res.send(h1);
});

app.get("/info", (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  const htmlResponse = `
    <html>
    <body>
    <h1>Hello, user!</h1>
    <p>Request received at: ${currentTime}</p>
    </body>
    </html>`;

  res.send(htmlResponse);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
