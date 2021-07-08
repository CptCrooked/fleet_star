import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [navState, setNavState] = useState("closed");

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
      <Layout theme={theme} navState={navState} setNavState={setNavState}>
        <h1
          style={
            theme === "light" ? { color: "rgb(18, 34, 89)" } : { color: "#ddd" }
          }
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          nobis eos aliquid cupiditate iure, animi eligendi atque accusantium.
          Facilis provident ea natus aliquid! Ea tempora sequi alias quos, aut
          aspernatur similique iste at, illum reiciendis iure! Modi quae magni
          doloremque. Aperiam libero cupiditate fuga quis quia accusantium,
          debitis praesentium cumque, itaque blanditiis, vel facilis et nisi
          asperiores veniam earum distinctio ea. Possimus totam rerum autem
          nobis at non voluptatem voluptatum, quasi, nisi obcaecati qui natus.
          Provident sequi quis nulla quas sed corporis at quidem saepe quasi,
          eum dolores possimus illum dolor tenetur doloribus dolore accusantium.
          Fugit, esse fuga! Ut, esse.
        </h1>
      </Layout>
    </>
  );
}
