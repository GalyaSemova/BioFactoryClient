import classes from '../../pages/products/Products.module.css'
import ProductCard from "../productCard/ProductCard";


function AllProducts({products}) {

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