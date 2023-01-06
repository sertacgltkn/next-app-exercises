import Link from "next/link";

export default function Home() {
  return (
    <div>
      <br />
      <Link // same "a" tag
      prefetch={false} //next.js prefetches the page by default, if you don't want it to do it, set it to false
      target="_blank"
      className="btn"
      href={
        {
          pathname: "/docs/post",
          query: { name: "Sertaç",   // url query
                   surname: "Gltkn" },
                   
        }
      }>Info page</Link>
    </div>
  );
}
