import features from "@/data/features.json";

export async function GET(request) {
  return new Response(JSON.stringify(features));
}
