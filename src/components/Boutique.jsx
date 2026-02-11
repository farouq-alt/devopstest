import { useState } from 'react';
import Produit from './Produit';
import produits from '../data/products.json';
import './Boutique.css';

export default function Boutique() {
  const [cart, setCart] = useState([]);

  return (
    <div className="boutique-container">
      <h1>Boutique</h1>
      <div className="produits-grid">
        {produits.produits.map(produit => (
          <Produit
            key={produit.id}
            id={produit.id}
            title={produit.title}
            price={produit.price}
            thumbnail={produit.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
