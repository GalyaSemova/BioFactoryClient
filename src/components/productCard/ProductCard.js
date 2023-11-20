import classes from '../../pages/products/Products.module.css'
import main from './ProductCard.module.css'
import MainButton from "../button/MainButton";



function ProductCard({product}) {
    return(
            <div className={`col-lg-4 col-md-4 col-sm-6 mb-4 ${main.cardContainer}`}>
                <div className={main.card}>
                    <img 
                         src={product.imageUrl}
                         alt = {product.name}
                         className={main.img}
                    />
                    <div className={main.viewDetailsContainer}>
                        <a className={main.viewDetailsLink} href={`/shop/product/${product.id}`}>
                            View details
                        </a>
                    </div>
                 <div className={main.card_body}>
                        <h5 className={classes.card_title}>{product.name}</h5>
                        <p className={classes.card_text}>EUR {product.price}</p>
                        <MainButton href="#" value="Add To Card"/>
                    </div>
                </div>
            </div>
    );
}

export default ProductCard;