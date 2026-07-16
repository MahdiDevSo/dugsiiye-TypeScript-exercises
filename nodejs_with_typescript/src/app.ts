import express from "express";

import authRoutes from "./routes/auth.route";
import productRoutes from "./routes/product.routes";
import goodbyeRoutes from "./routes/goodbyeRoutes"

const app = express();

app.use(express.json());
app.use(goodbyeRoutes);
app.use(authRoutes);
app.use(productRoutes);

export default app;