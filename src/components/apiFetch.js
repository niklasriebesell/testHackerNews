export default async function getHackerNews() {
  const result = await fetch("http://hn.algolia.com/api/v1/items/:id");
  const data = result.json();
  console.log(data);
  return data;
}
