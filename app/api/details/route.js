import connectMongoDB from "@/libs/db";
import Detail from "@/models/detail";

import { NextResponse } from "next/server";

export async function POST(req) {
  const { name, description } = await req.json();
  await connectMongoDB();
  await Detail.create({ name, description });
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const details = await Detail.find();
  return NextResponse.json({ details });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Detail.findByIdAndDelete(id);
  return NextResponse.json({ message: "User Deleted" }, { status: 200 });
}
