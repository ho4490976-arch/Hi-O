import { NextRequest } from 'next/server';
import { getProducts, createProduct } from '../../../src/controllers/product.controller';

export async function GET(req: NextRequest) {
  return await getProducts(req);
}

export async function POST(req: NextRequest) {
  return await createProduct(req);
}
