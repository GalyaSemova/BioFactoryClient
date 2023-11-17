import classes from '../../pages/products/Products.module.css'
import MainButton from "../button/MainButton";
function ProductCard({product}) {
    return(
            <div className="col-lg-6 col-md-6 col-sm-10 offset-md-0 offset-sm-1">
                <div className={classes.card}>
                    <img className={classes.img}
                         src="https://www.freepnglogos.com/uploads/cucumber-png/cucumber-png-image-purepng-transparent-png-26.png"
                        // scr="https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGRyZXNzfGVufDB8fDB8fHww"
                         // alt="Product 1"
                        // scr={product.imageUrl}
                         alt = {product.name}

                    />
                    <div className={classes.card_body}>
                        <h5 className={classes.card_title}>{product.name}</h5>
                        <p className={classes.card_text}>EUR {product.price}</p>
                        {/*<button className={`btn ${classes.btn_success}`}>Add to Cart</button>*/}
                        <MainButton href="#" value="Add To Card"/>
                    </div>
                </div>
            </div>
    );
}

export default ProductCard;