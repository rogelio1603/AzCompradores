import React from "react";
import Head from "next/head";
import { IndexStyles } from "../shared/Index.styles";
// * Components
import { Card } from "../components/Card.jsx";

export default function Home() {
  return (
    <IndexStyles>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <ul>
          <li>Popular</li>
          <li>Hogar</li>
          <li>Vida</li>
        </ul>

        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </IndexStyles>
  );
}
