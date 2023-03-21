const reviews = [
  {
    id: 0,
    quotes:
      "As the dev, i dont know what other people think, but i love the project. I have given so much of my time to it.",
    photo: "https://avatars.githubusercontent.com/u/46931079?v=4",
    name: "Itsaky",
    professions: ["Main Developer"],
  },
  {
    id: 1,
    quotes:
      "AndroidIDE have been my favorit tool for developing android apps. I could code whenever and wherever i want.",
    photo: "https://avatars.githubusercontent.com/u/68449470?v=4",
    name: "BanDroid",
    professions: ["Contributor", "Translator", "Front End Engineer"],
  },
  {
    id: 2,
    quotes:
      "I only code on phone, and for years there has been no option of an up-to-date IDE with passionate dev and devs. If you have been on a similar journey, try AndroidIDE for one day, and if you are ready for kotlin, you will realize this is the way and the only way.",
    photo: "https://avatars.githubusercontent.com/u/127817827?v=4",
    name: "Allo",
    professions: ["Android Developer"],
  },
];

export async function GET(request) {
  return new Response(JSON.stringify(reviews));
}
