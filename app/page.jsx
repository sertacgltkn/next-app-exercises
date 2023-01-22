import React from "react";
import { Inter, Open_Sans } from "@next/font/google";

const interFont = Inter({ subsets: ["latin"] });
const openSansFont = Open_Sans({ subsets: ["latin"] });

// export const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     cache: "no-store", // In Next.js 13, the "no-store" feature prevents the page from being cached by the browser.
//     next: { revalidate: 10 }, // so that the page can revalidate at any time we want.
//   });
//   return res.json;
// };
// export const getData2 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/2", {
//     cache: "no-store", // In Next.js 13, the "no-store" feature prevents the page from being cached by the browser.
//     next: { revalidate: 10 }, // so that the page can revalidate at any time we want.
//   });
//   return res.json;
// };
// export const getData3 = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/3", {
//     cache: "no-store", // In Next.js 13, the "no-store" feature prevents the page from being cached by the browser.
//     next: { revalidate: 10 }, // so that the page can revalidate at any time we want.
//   });
//   return res.json;
// };

function Home() {
  // const [getData, getData2, getData3] = await Promise.all([
  //   getData(),
  //   getData2(),
  //   getData3(),
  // ])

  // console.log(data);
  return (
    <div>
      <h2 className={openSansFont.className}>what's up</h2>
      <h1 className={interFont.className}>Hello world</h1>
    </div>
  );
}

export default Home;
