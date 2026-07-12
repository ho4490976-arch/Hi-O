import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '../config/mongodb';
import { ObjectId } from 'mongodb';

export const getProducts = async (req: NextRequest) => {
  const client = await clientPromise;
  const db = client.db();
  const products = await db.collection('products').find({}).toArray();
  return NextResponse.json(products);
};

export const createProduct = async (req: NextRequest) => {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db();
  const result = await db.collection('products').insertOne(body);
  return NextResponse.json(result, { status: 201 });
};
