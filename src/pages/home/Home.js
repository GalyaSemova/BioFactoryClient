import UserList from '../../components/UserList'
import NavBar from "../../components/NavBar";
import Hero from "../../components/Hero";
import Footer from "../../components/footer/Footer";
import CategoryBlock from "../../components/categoryBlock/CategoryBlock";
import HowItWorksBlock from "../../components/howItWorksBlock/HowItWorksBlock";
function Home() {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <CategoryBlock/>
            Hello ,Galye!
            <UserList/>
            <HowItWorksBlock/>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Home;