import connectMongoDB from "@/libs/db";
import Detail from "@/models/detail";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { newName: name, newDescription: description } = await req.json();
  await connectMongoDB();
  await Detail.findByIdAndUpdate(id, { name, description });
  return NextResponse.json({ message: "User Updated" }, { status: 200 });
}

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const detail = await Detail.findOne({ _id: id });
  return NextResponse.json({ detail }, { status: 200 });
}
