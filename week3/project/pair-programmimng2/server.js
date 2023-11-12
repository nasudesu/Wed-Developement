const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errorMiddleware");
const notFoundMiddleware = require("./middleware/notFoundMiddleware");

app.use(express.json());

app.use("/services", require("./routes/servicesRoutes"));
app.use("/tours", require("./routes/toursRoutes"));
app.use("/users", require("./routes/usersRoutes"));

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
