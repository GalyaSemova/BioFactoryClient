import classes from './CategoryBlock.module.css'
import CategoryCard from "../categoryCard/CategoryCard";



function CategoryBlock() {
    return (
        <div className="container">
            <h2 className={`${classes.title} text-center`}>Categories</h2>
            <div className={`row justify-content-center ${classes.cards_block}`}>
                <div className="col-3">
                    <CategoryCard />
                </div>
                <div className="col-3">
                    <CategoryCard />
                </div>
                {/*<div className="col-3">*/}
                {/*    <CategoryCard />*/}
                {/*</div>*/}
                {/*<div className="col-3">*/}
                {/*    <CategoryCard />*/}
                {/*</div>*/}
            </div>
        </div>
    );
}


export default CategoryBlock;