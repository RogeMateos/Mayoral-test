import React, { ReactNode, memo } from 'react';
import ArticuloModel from './../models/Articulo.model'
import Image from 'next/image';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import styles from '../styles/Articulo.module.scss'

type ArticuloProps = {
    articulo: ArticuloModel
}

// Componente memoizado que muestra información detallada de un artículo
const Articulo = memo(({ articulo }: ArticuloProps) => {
    console.log(articulo)
  return (
    <article>
        <Card className={styles['card']}>
            {/* Imagen del artículo */}
            <Card.Img 
                className={styles['card-img-top']} 
                variant="top" 
                src={articulo.image} 
                alt={`imagen articulo ${articulo.name}`} 
            />
            <Card.Body className={styles['card-body']}>
                {/* Título del artículo */}
                <Card.Title>{articulo.name}</Card.Title>
                {/* Precio anterior, si existe */}
                {articulo.oldPrice > 0 && (
                    <Card.Text className={styles['old-price']}>
                        {articulo.oldPrice} €
                    </Card.Text>
                )}
                {/* Nuevo precio con descuento, si aplica */}
                {articulo.oldPrice > 0 ? (
                    <Card.Text className={styles['new-price']}>
                        {articulo.price} € 
                        <span>
                            (-{Math.floor(((articulo.oldPrice - articulo.price) / articulo.oldPrice) * 100)}%)
                        </span>
                    </Card.Text>
                ) : (
                    <Card.Text>{articulo.price} €</Card.Text>
                )}
                {/* Indicación de más colores disponibles */}
                {articulo.colores > 1 && (
                    <Card.Text className={styles['more-colors']}>
                        más colores
                    </Card.Text>
                )}
                {/* Botón para añadir al carrito */}
                <Button className={styles['btn']} variant="primary">
                    AÑADIR
                </Button>
            </Card.Body>
        </Card>
    </article>
  );
});

export default Articulo;
