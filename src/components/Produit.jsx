export default function Produit({ id, title, price, thumbnail }) {
  const handleAddToCart = () => {
    alert(`${title} ajouté au panier!`);
  };

  return (
    <div className="produit-card">
      <div className="produit-image">
        <img src={`/images/${thumbnail}`} alt={title} />
      </div>
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <button className="btn-ajouter" onClick={handleAddToCart}>
        Ajouter au panier
      </button>
    </div>
  );
}
