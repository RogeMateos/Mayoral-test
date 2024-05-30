import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Shop from '@/components/Shop';
import ArticulosModel from './../models/Articulo.model';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

// Función para parsear el JSON y convertirlo en un array de ArticulosModel
function parseJSON(): ArticulosModel[] {
  const json = require('./../assets/json/json.json');
  const articulos: ArticulosModel[] = JSON.parse(JSON.stringify(json));
  return articulos;
}

export default function Home() {
  // Estado para almacenar los artículos, inicializado con los datos parseados del JSON
  const [articulos, setArticulos] = useState(parseJSON());
// Función para filtrar artículos por nombre
  const handleFilterByName = (name: string) => {
    const filteredArticulos = parseJSON().filter((articulo) =>
      articulo.name.toLowerCase().includes(name.toLowerCase())
    );
    setArticulos(filteredArticulos);
  };
 // Función para ordenar artículos por precio de forma descendente
  const sortByPriceDescending = () => {
    const sortedArticulos = [...articulos].sort((a, b) => b.price - a.price);
    setArticulos(sortedArticulos);
  };
 // Función para ordenar artículos por precio de forma ascendente
  const sortByPriceAscending = () => {
    const sortedArticulos = [...articulos].sort((a, b) => a.price - b.price);
    setArticulos(sortedArticulos);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>mayoral-assignement</title>
      </Head>
      <Header
        filterByName={handleFilterByName}
        sortByPriceDescending={sortByPriceDescending}
        sortByPriceAscending={sortByPriceAscending}
      />
      <Shop articulos={articulos} />
      <Footer />
    </div>
  );
}
