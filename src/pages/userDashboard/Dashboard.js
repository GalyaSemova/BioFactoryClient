import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";
import MainButton from "../../components/button/MainButton";
import {Pagination} from "reactstrap";

function Dashboard() {
    const currentPage = 3;
    const totalPages = 10;

    return (
        <div className="container-fluid container-fluid-custom pb-5 mb-5">
            <div>
                <StaticNavBar/>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <h1>Hey, </h1>
                </div>
                <div className="col text-end">
                    <MainButton href="dashboard/add" value="+ New Offer"/>
                    {/*<a href="/dashboard/add" className="btn btn-primary">+ New Offer</a>*/}
                </div>
            </div>
            <Pagination current={currentPage} pages={totalPages} />


            <footer>
                <Footer/>
            </footer>
        </div>

    );

}

export default Dashboard;
