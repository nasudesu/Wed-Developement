const express = require("express");
const app = express();
const port = 3000;

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

let times = 0;
app.get("/htmlmessage", (req, res) => {
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
