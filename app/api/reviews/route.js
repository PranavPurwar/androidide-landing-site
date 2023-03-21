import reviews from "@/data/reviews.json";

export async function GET(request) {
  return new Response(JSON.stringify(reviews));
}
