import classes from './Products.module.css'

import AllProducts from "../../components/allProducts/AllProducts";
import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";

import { request } from '../../utils/AxiosHelper';
import React, { useState, useEffect } from 'react';

function Products() {

    const [totalProducts, setTotalProducts] = useState(0);
    const [subcategories, setSubcategories] = useState([]);
    const [subcategoriesByCategory, setsubcategoriesByCategory] = useState({});

    const [sortBy, setSortBy] = useState('popularity'); // Default sorting
    const [products, setProducts] = useState([]);  

    const sortProducts = (sortByOption) => {
        let sortedProducts = [...products];
      
        if (sortByOption === 'popularity') {
          sortedProducts.sort((a, b) => b.popularity - a.popularity);
        } else if (sortByOption === 'price') {
          sortedProducts.sort((a, b) => a.price - b.price);
        }
      
        setProducts(sortedProducts);
      };


      const handleSortChange = (event) => {
        const sortByOption = event.target.value;
        setSortBy((prevSortBy) => {
            if (prevSortBy !== sortByOption) {
                sortProducts(sortByOption);
            }
            return sortByOption;
        });
        sortProducts(sortByOption);
      };

      useEffect(() => {
       
            const apiEndpoint = '/categories/subcategories';
            const apiAllProductsEndpoint = '/products/all';
        
            request('GET', apiEndpoint)
                .then((response) => {
                    setSubcategories(response.data);

                    request('GET', apiAllProductsEndpoint)
                    .then((response) => {
                      const total = response.data.reduce((acc, product) => {
                        return acc + 1; 
                      }, 0);
                      setTotalProducts(total);

                      sortProducts(sortBy);
                    })
                    .catch((error) => {
                      console.error('Error fetching total products:', error);
                    });
                })
                .catch((error) => {
                    console.error('Error fetching subcategories data:', error);
                });
               
        
    }, [sortBy]);

    // useEffect(() => {
    //     const fetchProductCounts = async () => {
    //         const counts = await Promise.all(subcategories.map(subcategory => {
    //             const apiProductsBySubcategory = `/products/${subcategory.name}`;
    //             return request('GET', apiProductsBySubcategory).then(response => response.data.length);
    //         }));
    
    //         const subcategoryCountMap = Object.fromEntries(subcategories.map((subcategory, index) => [subcategory.name, counts[index]]));
    //         setsubcategoriesByCategory(subcategoryCountMap);
    //     };
    
    //     fetchProductCounts();
    // }, [subcategories]);

    return (
        <div>
            <StaticNavBar/>
            <div className={classes.wrapper}>
                <div className="d-md-flex align-items-md-center">
                    {/* <div className={classes.h3}>{category}</div> */}
                  
                    <div className="ml-auto d-flex align-items-center views">
                        {/* <span className={`${classes.btn} ${classes.text_success}`}>`
                            <span className={`${classes.fas} fa-th px-md-2 px-1`}></span>
                            <span>Grid view</span>
                        </span>
                        <span className={classes.btn}>
                            <span className={`${classes.fas} fa-list-ul`}></span>
                            <span className="px-md-2 px-1">List view</span>
                        </span> */}
                        <span className={`${classes.green_label} px-md-2 px-1`}>{totalProducts}</span>
                        <span className={classes.text_muted}>Products</span>
                    </div>
                </div>
                <div className="d-lg-flex align-items-lg-center pt-2">
                  {/* TODO  */}
                    <div className={`form-inline d-flex align-items-center my-2 mr-lg-4 ${classes.radio} bg-light ${classes.border}`}>
                        <label className={classes.options}>
                            <input
                            type="radio"
                            name="sortBy"
                            value="popularity"
                            checked={sortBy === 'popularity'}
                            onChange={handleSortChange}
                            />
                            Most Popular
                                <span className={classes.checkmark}></span>
                        </label>
                        <label className={classes.options}>
                            <input
                            type="radio"
                            name="sortBy"
                            value="price"
                            checked={sortBy === 'price'}
                            onChange={handleSortChange}
                            />
                            Cheapest
                            <span className={classes.checkmark}></span>
                        </label>
                    </div>
                    {/* <div className={`form-inline d-flex align-items-center my-2 ${classes.checkbox} bg-light ${classes.border} mx-lg-2`}>
                        <label className={classes.tick}>Farm
                            <input type="checkbox" checked="checked" />
                            <span className={classes.check}></span>
                        </label>
                        <span className={`${classes.text_success} px-2 ${classes.count}`}>328</span>
                    </div>
                    <div className={`form-inline d-flex align-items-center my-2 ${classes.checkbox} bg-light ${classes.border} mx-lg-2`}>
                        <label className={classes.tick}>Bio <input type="checkbox" />
                            <span className={classes.check}></span>
                        </label>
                        <span className={`${classes.text_success} px-2 ${classes.count}`}>72</span>
                    </div>
                    <div className={`form-inline d-flex align-items-center my-2 ${classes.checkbox} bg-light ${classes.border} mx-lg-2`}>
                        <label className={classes.tick}>Czech republic
                            <input type="checkbox" />
                            <span className={classes.check}></span>
                        </label>
                        <span className={`${classes.border} px-1 mx-2 mr-3 font-weight-bold ${classes.count}`}>12</span>
                        <select name="country" id="country" className="bg-light">
                            <option value="" hidden>Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Uk">UK</option>
                        </select>
                    </div> */}
                </div>
                <div className={`d-sm-flex align-items-sm-center pt-2 ${classes.clear}`}>
                    <div className={`${classes.text_muted} filter-label`}>Applied Filters:</div>
                    <div className={`${classes.green_label} font-weight-bold p-0 px-1 mx-sm-1 mx-0 my-sm-0 my-2`}>All Products
                        <span className={`px-1 ${classes.close}`}>&times;</span>
                    </div>
                </div>
                <div className="filters">
                    <button className={`${classes.btn} ${classes.btn_success}`} type="button" data-toggle="collapse" data-target="#mobile-filter"
                            aria-expanded="true" aria-controls="mobile-filter">
                        Filter<span className={`px-1 ${classes.fas} fa-filter`}></span>
                    </button>
                </div>
                <div className={`${classes.content} py-md-0 py-3 d-flex flex-sm-row flex-column align-items-start`}>
                    <section id="sidebar" className={classes.sidebar}>
                    
                       <div id="mobile-filter" className={classes.mobile_filter}>
                           
                            {subcategories.forEach((subcategory) => {
                                if (!subcategoriesByCategory[subcategory.category]) {
                                    subcategoriesByCategory[subcategory.category] = [];
                                }
                                subcategoriesByCategory[subcategory.category].push(subcategory);
                            })}

                            
                            {Object.entries(subcategoriesByCategory).map(([category, subcategoriesInCategory]) => (
                                <div key={category}>
                                    <div className="py-3">
                                        <h5 className="font-weight-bold">{category}</h5>
                                        <ul className="list-group">
                                            {subcategoriesInCategory.map((filteredSubcategory) => (
                                                <li
                                                    key={filteredSubcategory.name}
                                                    className={`${classes.list_group_item} list-group-item-action d-flex justify-content-between align-items-center 
                                                    ${classes.category} list-group-item`}
                                                >
                                                    {filteredSubcategory.name}
                                                    <span className={`badge ${classes.badge_primary} badge-pill`}>{filteredSubcategory.productCount}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* <div id="mobile-filter" className={classes.mobile_filter}>
                            <div className="py-3">
                                <h5 className="font-weight-bold">Categories</h5>
                                <ul className="list-group">
                                    <li className={`${classes.list_group_item} list-group-item-action d-flex justify-content-between align-items-center ${classes.category} list-group-item`}>
                                        vegetables
                                        <span className={`badge ${classes.badge_primary} badge-pill`}>328</span>
                                    </li>
                                    <li className={`${classes.list_group_item} list-group-item-action d-flex justify-content-between align-items-center ${classes.category} `}>
                                        Fruits
                                        <span className={`badge ${classes.badge_primary} badge-pill`}>112</span>
                                    </li>
                                    <li className={`${classes.list_group_item} list-group-item-action d-flex justify-content-between align-items-center ${classes.category} `}>
                                        Kitchen Accessories
                                        <span className={`badge ${classes.badge_primary} badge-pill`}>32</span>
                                    </li>
                                    <li className={`${classes.list_group_item} list-group-item-action d-flex justify-content-between align-items-center ${classes.category} `}>
                                        Chefs Tips
                                        <span className={`badge ${classes.badge_primary} badge-pill`}>48</span>
                                    </li>
                                </ul>
                            </div> */}
                            {/* <div className="py-3">
                                <h5 className="font-weight-bold">Brands</h5>
                                <form className={classes.brand}>
                                    <div className="form-inline d-flex align-items-center py-1">
                                        <label className={classes.tick}>RoyalFields
                                            <input type="checkbox" />
                                            <span className={classes.check}></span>
                                        </label>
                                    </div>
                                    <div className="form-inline d-flex align-items-center py-1">
                                        <label className={classes.tick}>Crasmas Fields
                                            <input type="checkbox" checked />
                                            <span className={classes.check}></span>
                                        </label>
                                    </div>
                                    <div className="form-inline d-flex align-items-center py-1">
                                        <label className={classes.tick}>Vegetarisma Farm
                                            <input type="checkbox" checked />
                                            <span className={classes.check}></span>
                                        </label>
                                    </div>
                                    <div className="form-inline d-flex align-items-center py-1">
                                        <label className={classes.tick}>Farmar Field Eve
                                            <input type="checkbox" />
                                            <span className={classes.check}></span>
                                        </label>
                                    </div>
                                    <div className="form-inline d-flex align-items-center py-1">
                                        <label className={classes.tick}>True Farmar Steve
                                            <input type="checkbox" />
                                            <span className={classes.check}></span>
                                        </label>
                                    </div>
                                </form>
                            </div> */}
                            {/*<div className="py-3">*/}
                            {/*    <h5 className="font-weight-bold">Rating</h5>*/}
                            {/*    <form className={classes.rating}>*/}
                            {/*        <div className="form-inline d-flex align-items-center py-2">*/}
                            {/*            <label className={classes.tick}>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <input type="checkbox" />*/}
                            {/*                <span className={classes.check}></span>*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*        <div className="form-inline d-flex align-items-center py-2">*/}
                            {/*            <label className={classes.tick}>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className={`far fa-star px-1 ${classes.text_muted}`}></span>*/}
                            {/*                <input type="checkbox" />*/}
                            {/*                <span className={classes.check}></span>*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*        <div className="form-inline d-flex align-items-center py-2">*/}
                            {/*            <label className={classes.tick}>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className={`far fa-star px-1 ${classes.text_muted}`}></span>*/}
                            {/*                <span className={`far fa-star px-1 ${classes.text_muted}`}></span>*/}
                            {/*                <input type="checkbox" />*/}
                            {/*                <span className={classes.check}></span>*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*        <div className="form-inline d-flex align-items-center py-2">*/}
                            {/*            <label className={classes.tick}>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className="far fa-star px-1 text-muted"></span>*/}
                            {/*                <span className="far fa-star px-1 text-muted"></span>*/}
                            {/*                <span className="far fa-star px-1 text-muted"></span>*/}
                            {/*                <input type="checkbox" />*/}
                            {/*                <span className={classes.check}></span>*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*        <div className="form-inline d-flex align-items-center py-2">*/}
                            {/*            <label className={classes.tick}>*/}
                            {/*                <span className="fas fa-star"></span>*/}
                            {/*                <span className={`far fa-star px-1 ${classes.text_muted}`}></span>*/}
                            {/*                <span className={`far fa-star px-1 ${classes.text_muted}`}></span>*/}
                            {/*                <span className={`far fa-star px-1 ${classes.text_muted}`}></span>*/}
                            {/*                <span className={`far fa-star px-1 ${classes.text_muted}`}></span>*/}
                            {/*                <input type="checkbox" />*/}
                            {/*                <span className={classes.check}></span>*/}
                            {/*            </label>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                        {/* </div> */}
                    </section>
                    <div>
                        <AllProducts products={products}/>
                    </div>
                </div>
            </div>
                <footer className={classes.footer}>
                    <Footer/>
                </footer>
        </div>
    );
}

export default Products;