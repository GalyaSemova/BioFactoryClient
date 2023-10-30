

import React, { useState, useEffect } from 'react';
import classes from './CategoryBlock.module.css';
import CategoryCard from '../categoryCard/CategoryCard';
import { request } from '../../utils/AxiosHelper'; 

function CategoryBlock() {
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        // Define the API endpoint to fetch category data
        const apiEndpoint = '/categories';

        // Use your Axios request function to fetch data
        request('GET', apiEndpoint)
            .then(response => {
                setCategoryData(response.data);
            })
            .catch(error => {
                console.error('Error fetching category data:', error);
            });
    }, []);

    return (
        <div className={`container ${classes.categoryBlockContainer}`}>
            <h2 className={`${classes.title} text-center`}>Categories</h2>
            <div className={`row justify-content-center ${classes.cards_block}`}>
                {categoryData.map(category => (
                    <div className={`col-3 ${classes.cardColumn}`} key={category.id}>
                        <CategoryCard category={category} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategoryBlock;