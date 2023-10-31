import Logo from '../../components/logo/Logo';
import AddOfferForm from '../../components/addOfferForm/AddOfferForm';

function AddOffer() {
    return (
        <div className= "row" style={{
            backgroundImage: `url(${require('../../assets/notes.jpeg')})`,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative',
            minHeight: '100vh',
        }}>
            <div className="mask" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: '60px',
                borderRadius: '15px'

            }}>
                <Logo/>
            </div>
            <div className="m-lg-3" >
                <AddOfferForm/>
            </div>

        </div>

    );
}

export default AddOffer;