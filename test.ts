for await (const dirEntry of Deno.readDir("C://")) {
  console.log(dirEntry.name);
}
const files = [];

while (true) {
  const file = await Deno.open("mod.ts");
  const fileCount = files.push(file);
  console.log(`Pushing... file #${fileCount}`);
}
