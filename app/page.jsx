import React from "react";

export const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json;
};

async function Home() {
  const data = await getData();
  console.log(data);
  return <h1>Data Fetching</h1>
}

export default Home;
