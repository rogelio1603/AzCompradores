import Head from "next/head";
import styles from "../styles/Home.module.css";
import { request } from "../components/datocms";
import React from "react";
import { IndexStyles } from "../shared/Index.styles";
// * Components
import { Card } from "../components/Card.jsx";
import { Modal } from "../components/Modal";

const HOMEPAGE_QUERY = `query {
  allProducts {
    image {
      url
    }
    title
    category
    content
    mxLink
    usLink
    mxImage{
      url
    }
    usImage{
      url
    }
  }
}
`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: { data },
  };
}

export default function Home({ data }) {
  const [showModal, setShowModal] = React.useState(false);
  const [infoModal, setInfoModal] = React.useState({});
  const [productsSelected, setProductsSelected] = React.useState(() => {
    return data.allProducts;
  });

  const openModal = (product) => {
    setInfoModal(product);
    setShowModal((prev) => !prev);
  };

  const filtradoSports = data.allProducts.filter((producto) => {
    return producto.category === "Sports";
  });

  const filtradoPopular = data.allProducts.filter((producto) => {
    return producto.category === "Populares";
  });

  const filtradoHogar = data.allProducts.filter((producto) => {
    return producto.category === "Hogar";
  });

  const filtradoVida = data.allProducts.filter((producto) => {
    return producto.category === "Vida";
  });

  const filtradoSalir = data.allProducts.filter((producto) => {
    return producto.category === "Salir";
  });

  const filtradoIntelecto = data.allProducts.filter((producto) => {
    return producto.category === "Intelecto";
  });

  return (
    <IndexStyles>
      <Head>
        <title>AzCompradores</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <div className="category">
        <ul className="category-container">
          <li
            onClick={() => {
              setProductsSelected(data.allProducts);
            }}
          >
            💎 Inicio
          </li>
          <li
            onClick={() => {
              setProductsSelected(filtradoPopular);
            }}
          >
            🔥 Popular
          </li>
          <li
            onClick={() => {
              setProductsSelected(filtradoHogar);
            }}
          >
            🏡 Hogar
          </li>
          <li
            onClick={() => {
              setProductsSelected(filtradoVida);
            }}
          >
            🤟🏻 Vida
          </li>
          <li
            onClick={() => {
              setProductsSelected(filtradoSports);
            }}
          >
            🏋🏻‍♂️ Fitness
          </li>
          <li
            onClick={() => {
              setProductsSelected(filtradoIntelecto);
            }}
          >
            💡 Intelecto
          </li>
          <li
            onClick={() => {
              setProductsSelected(filtradoSalir);
            }}
          >
            🌎 Salir
          </li>
        </ul>
      </div>

      <div>
        <Modal
          infoModal={infoModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <div className="cards-container">
          {productsSelected.map((product, i) => (
            <Card
              onClick={() => openModal(product)}
              key={i}
              image={product.image}
              title={product.title}
              category={product.category}
              content={product.content}
              mxLink={product.mxLink}
              usLink={product.usLink}
              mxImage={product.mxImage}
              usImage={product.usImage}
            />
          ))}
        </div>
      </div>
    </IndexStyles>
  );
}
