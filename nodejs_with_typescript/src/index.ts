
import app from "./app";

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running ✅  on http://localhost:${PORT}`);
});


// import express from "express";
// import goodbyeRoutes from "./routes/goodbyeRoutes"

// const app = express();

// app.use(express.json());

// app.use(goodbyeRoutes);

// app.listen(3000, () => {
//     console.log("Server Running...✅ on http://localhost:3000");
// });