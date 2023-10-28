import LoginForm from "../../components/loginForm/LoginForm";
import Logo from "../../components/logo/Logo";



function Login(){
    return (
        <div className= "row" style={{
            backgroundImage: `url(${require('../../assets/fruits1.jpg')})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
        }}>
            <div className="container m-lg-5 p-2">
                <Logo/>
            </div>
            <div className="m-lg-0" >
                <LoginForm/>
            </div>

        </div>

       );
    }

    export default Login;
