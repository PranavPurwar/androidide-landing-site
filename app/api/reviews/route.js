import { NextResponse } from "next/server";
import reviews from "@/data/reviews.json";

export async function GET(request) {
  return NextResponse.json(reviews);
}
