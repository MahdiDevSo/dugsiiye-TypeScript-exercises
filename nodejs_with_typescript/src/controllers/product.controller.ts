import { Request, Response } from "express";
import {
  ProductQuery,
  ProductParams,
  UpdateProductBody,
} from "../types/product";

// GET /products?page=1&limit=10
export function getProducts(
  req: Request<{}, {}, {}, ProductQuery>,
  res: Response
) {
  const { page, limit } = req.query;

  res.json({
    message: `Page ${page} with ${limit} items`,
  });
}

// PUT /products/:id
export function updateProduct(
  req: Request<ProductParams, {}, UpdateProductBody>,
  res: Response
) {
  const { id } = req.params;
  const { name, price } = req.body;

  res.json({
    message: "Product updated successfully",
    id,
    name,
    price,
  });
}