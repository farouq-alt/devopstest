import { useState } from 'react';
import './AjoutLivre.css';

export default function AjoutLivre() {
  const [livres, setLivres] = useState([
    { num: 1, titre: 'Antigone', dateEdition: '1944-01-05', genre: 'Tragédie', prix: 59 },
    { num: 2, titre: 'Les pauvres', dateEdition: '2000-12-30', genre: 'Tragédie', prix: 109 },
    { num: 3, titre: 'TED', dateEdition: '2010-12-30', genre: 'Comédie', prix: 80 }
  ]);

  const [formData, setFormData] = useState({
    num: '',
    titre: '',
    dateEdition: '',
    genre: 'Comédie',
    prix: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.num.trim()) newErrors.num = 'Le numéro est requis';
    if (!formData.titre.trim()) newErrors.titre = 'Le titre est requis';
    if (!formData.dateEdition) newErrors.dateEdition = 'La date d\'édition est requise';
    if (!formData.prix) newErrors.prix = 'Le prix est requis';
    else if (parseFloat(formData.prix) > 200) newErrors.prix = 'Le prix ne doit pas dépasser 200 dh';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleAjouter = () => {
    if (validateForm()) {
      const newLivre = {
        num: parseInt(formData.num),
        titre: formData.titre,
        dateEdition: formData.dateEdition,
        genre: formData.genre,
        prix: parseFloat(formData.prix)
      };
      setLivres([...livres, newLivre]);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      num: '',
      titre: '',
      dateEdition: '',
      genre: 'Comédie',
      prix: ''
    });
    setErrors({});
  };

  return (
    <div className="ajout-livre-container">
      <h1>Ajouter Un livre</h1>
      
      <div className="form-section">
        <div className="form-group">
          <label>Num :</label>
          <input
            type="number"
            name="num"
            value={formData.num}
            onChange={handleInputChange}
            className={errors.num ? 'input-error' : ''}
          />
          {errors.num && <span className="error-message">{errors.num}</span>}
        </div>

        <div className="form-group">
          <label>Titre :</label>
          <input
            type="text"
            name="titre"
            value={formData.titre}
            onChange={handleInputChange}
            className={errors.titre ? 'input-error' : ''}
          />
          {errors.titre && <span className="error-message">{errors.titre}</span>}
        </div>

        <div className="form-group">
          <label>Date d'édition :</label>
          <input
            type="date"
            name="dateEdition"
            value={formData.dateEdition}
            onChange={handleInputChange}
            className={errors.dateEdition ? 'input-error' : ''}
          />
          {errors.dateEdition && <span className="error-message">{errors.dateEdition}</span>}
        </div>

        <div className="form-group">
          <label>Genre littéraire :</label>
          <select
            name="genre"
            value={formData.genre}
            onChange={handleInputChange}
          >
            <option value="Comédie">Comédie</option>
            <option value="Tragédie">Tragédie</option>
            <option value="Drame">Drame</option>
            <option value="Romance">Romance</option>
          </select>
        </div>

        <div className="form-group">
          <label>Prix :</label>
          <input
            type="number"
            name="prix"
            value={formData.prix}
            onChange={handleInputChange}
            className={errors.prix ? 'input-error' : ''}
          />
          {errors.prix && <span className="error-message">{errors.prix}</span>}
        </div>

        <div className="button-group">
          <button className="btn-ajouter" onClick={handleAjouter}>Ajouter</button>
          <button className="btn-reset" onClick={handleReset}>Réinitialiser</button>
        </div>
      </div>

      <div className="livres-list">
        <h2>Liste des livres</h2>
        <ul>
          {livres.map(livre => (
            <li key={livre.num}>
              Num : {livre.num} | Titre : {livre.titre} | Date édition : {livre.dateEdition} | Genre : {livre.genre} | Prix : {livre.prix}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
