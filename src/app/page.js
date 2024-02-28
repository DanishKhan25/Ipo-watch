import IPOList from "@/components/IPOList";

async function getData() {
  const response = await fetch(
    "https://api.moneycontrol.com/mcapi/v1/ipo/get-listed-ipo"
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const data = await response.json();
  const { listedIpo } = data?.data;
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return listedIpo;
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <IPOList data={data} />
    </main>
  );
}
