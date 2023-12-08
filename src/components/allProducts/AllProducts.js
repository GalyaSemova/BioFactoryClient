import classes from '../../pages/products/Products.module.css'
import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";


function AllProducts({products}) {

    // TODO Padination, check for partial page change and decide which one to use Pagination or PaginationItem
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const apiUrl = "http://localhost:8080/api/v1/products/all";

    //     fetch(apiUrl)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`HTTP error! Status: ${response.status}`);
    //             }
    //             return response.json();
    //         })
    //         .then((data) => {
    //             setProducts(data);
    //         })
    //         .catch((error) => {
    //             console.error("Error fetching product data:", error);
    //         });
    // }, []);

    return(
        <div>
            <section id="products" className={`ml-sm-8 mt-8 mt-sm-0 ${classes.products}`}>
                <div className="container py-3">
                    <div className="row">
                    {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    {/* <Pagination  current={currentPage} pages={totalPages} /> */}
                </div>
            </section>
        </div>
    );
}
export default AllProducts;