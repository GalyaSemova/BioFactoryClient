import classes from './HowItWorks.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';
function HowItWorksBlock() {
    const gradientStyle = {
        background: 'radial-gradient(circle, #008000, transparent)',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat'
        // background: rgb(0,128,0),
        // background: 'radial-gradient(circle, rgba(0,128,0,1) 0% rgba(0,128,0,0.15541568189775912) 42%)'
    };
    return(
        <div className="container my-5" id="how_it_works" >
            <div className="row" >
                <div className="col-lg-6 p-4" style={gradientStyle} >
                    {/*<img src={`${"../assets/spices.webp"}`} alt="How It Works Image" className="img-fluid"/>*/}
                    <img
                        src= {require("../../assets/bio_soups.jpg")}
                        alt="How It Works Image"
                        className="img-fluid"
                    />
                </div>
                <div className="col-lg-6"  >
                    <h2 className={`${classes.title} mb-4`}>How It Works</h2>
                    <p>Your GO-TO destination for all things organic and sustainable...</p>
                    <ol>
                        <li>Explore the Marketplace</li>
                        <li>Create an Account</li>
                        <li>Post Offers</li>
                        <li>Connect with Buyers</li>
                        <li>Secure Transactions</li>
                        <li>Stay Informed</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default HowItWorksBlock;
