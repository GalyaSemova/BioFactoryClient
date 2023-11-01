import React from 'react';
import classes from './CategoryCard.module.css'

import MainButton from '../button/MainButton';

function CategoryCard({ category }) {
    return (
        <div className="card" style={{ width: '30rem'}}>
            <img className="card-img-top" src={category.imgUrl} alt={category.name} />
            <div className="card-body">
                <h5 className="card-title">{category.name}</h5>
                <p className="card-text">{category.description}</p>
                <MainButton href={`/shop/${category.name}`} value="Visit Our Store" />
            </div>
        </div>
    );
}

export default CategoryCard;