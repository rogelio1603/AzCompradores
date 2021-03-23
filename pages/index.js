import React from "react";
import Head from "next/head";
import { IndexStyles } from "../shared/Index.styles";

export default function Home() {
  return (
    <IndexStyles>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Hola</div>
    </IndexStyles>
  );
}
