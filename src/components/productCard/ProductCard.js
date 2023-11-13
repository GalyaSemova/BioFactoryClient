import classes from '../../pages/products/Products.module.css'
import MainButton from "../button/MainButton";
function ProductCard({product}) {
    return(
            <div className="col-lg-6 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className={classes.card}>
                    <img className={classes.img}
                         src="https://www.freepnglogos.com/uploads/cucumber-png/cucumber-png-image-purepng-transparent-png-26.png"
                         // alt="Product 1"
                        // scr={product.imageUrl}
                         alt = {product.name}

                    />
                    <div className={classes.card_body}>
                        <h5 className={classes.card_title}>{product.name}</h5>
                        <p className={classes.card_text}>$1.50 / kg</p>
                        {/*<button className={`btn ${classes.btn_success}`}>Add to Cart</button>*/}
                        <MainButton href="#" value="Add To Card"/>
                    </div>
                </div>
            </div>
    );
}

export default ProductCard;