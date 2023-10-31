import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";
import MainButton from "../../components/button/MainButton";




function Dashboard() {
   
    return (
        <div className="container-fluid container-fluid-custom pb-5 mb-5">
            <div>
                <StaticNavBar/>
            </div>
            <div className="row m-lg-4">
                <div className="m-lg-2">
                    <div className="col">
                        <h1>Hey, Name</h1>
                    </div>
                    <div className="col d-flex align-items-left">
                        <MainButton href="/" value="Profile" className="m-2"/>  
                        <MainButton href="/" value="My Offers" className="m-2"/>  
                    </div>
                    <div classname="container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Img</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price(EUR)</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Handbag</td>
                                    <td>URL</td>
                                    <td>5</td>
                                    <td>300</td>
                                    <td>The Best Product</td>
                                    <td className="d-flex">
                                        <MainButton href="" value="Edit"/>
                                        <MainButton href="" value="Delete"/>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col text-end">
                        <MainButton href="dashboard/add" value="+ New Offer"/>
                        {/*<a href="/dashboard/add" className="btn btn-primary">+ New Offer</a>*/}
                    </div>    
                </div>  
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>

    );

}

export default Dashboard;
