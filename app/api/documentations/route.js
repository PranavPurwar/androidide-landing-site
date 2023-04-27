import { NextResponse } from "next/server";
import docRoutes from "@/data/documentationRoutes";

export async function GET(request) {
  return NextResponse.json(docRoutes);
}
