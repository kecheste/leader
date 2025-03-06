require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db");
const swaggerUi = require("swagger-ui-express");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(
  cors({
    origin: process.env.NEXT_PUBLIC_FRONT_URI,
    // origin: "http://localhost:3000", // Frontend public URI for local development
  })
);

const leadRoutes = require("./src/routes/leadsRoutes");
const swaggerSpec = require("./src/config/swaggerConfig");

app.use("/api/v1/leads", leadRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("*", (req, res, next) => {
  return res.status(404).json({
    message: "Not Found",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
