import 'bootstrap/dist/css/bootstrap.min.css';

import MainButton from "./button/MainButton";


function Hero() {
    return (
        // Hero
        <div className="p-5 text-center bg-image rounded-3" style={{
            backgroundImage: `url(${require('../assets/spices.webp')})`,
            height: '600px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
        }}>
            <div className="mask" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '20px',
                borderRadius: '15px'

            }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-green">
                        <h1 className="mb-4 text-white" style={{fontSize: '3rem' }}>
                            Welcome to BioFactory: Your Sustainable Marketplace
                        </h1>
                        <h4 className="mb-4 text-white" style={{ fontSize: '1.5rem' }}>
                            Discover, Share, and Shop
                            Eco-friendly Products
                            From Our Community
                        </h4>
                        <MainButton value={"HOW IT WORKS"} href="#how_it_works"/>
                    </div>
                </div>
            </div>
        </div>
        // Hero
    );
}

export default Hero;