const testData = async () => {
  try {
    const res = await fetch(process.env.URL + "/api/biolink/username");

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export default async function Page() {
  const res = await testData();
  return <div>{JSON.stringify(res)}</div>;
}
