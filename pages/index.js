import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Head>
        <title>Fleet Star</title>
        <meta
          name="description"
          content="Website of Fleet Star film trucks and trailers"
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <h1>Hello World</h1>
    </>
  );
}
