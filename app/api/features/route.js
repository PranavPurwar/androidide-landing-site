import { NextResponse } from "next/server";
import features from "@/data/features.json";

export async function GET(request) {
  return NextResponse.json(features);
}
