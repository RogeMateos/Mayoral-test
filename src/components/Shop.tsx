import React, { ReactNode } from 'react';
import Articulo from './Articulo';
import ArticuloModel from './../models/Articulo.model'

//Styles
import styles from '../styles/Shop.module.scss'

type ShopProps = {
  articulos: ArticuloModel[]
}

// Definición del componente Shop que recibe un array de articulos como props
const Shop = ( {articulos}: ShopProps ) => {

  return (
    <header>
        <div className = {styles['container']}>
            <div className = {styles['shop']}>
              {articulos.map((articulo: ArticuloModel, index: number) => (
                //utilizo index porque no tengo ids en json, esto no es considerado buena practica
                <Articulo key={index} articulo = {articulo} />
              ))}
            </div>
        </div>
    </header>
  );
};

export default Shop