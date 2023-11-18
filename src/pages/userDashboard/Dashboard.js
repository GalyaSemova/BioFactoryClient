import React, { useState, useEffect } from "react";

import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";
import MainButton from "../../components/button/MainButton";
import EditProductModal from "./EditProductModal";

import AuthService from "../../services/AuthService";
import { request } from "../../utils/AxiosHelper";

// for delete I need to cust the header
import axios from 'axios';

import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

// func helper for finding the user data

 const getUserById = (userId) => {
    const endpoint = `/users/${userId}`;
    return request('GET', endpoint);
  };

  const getProductsById = (userId) => {
    const endpoint = `/products/${userId}/all`;
    return request('GET', endpoint);
  };


function Dashboard() {

    const [activeTab, setActiveTab] = useState("profile");
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const openModal = (product) => {
      setSelectedProduct(product);
      setIsEditModalOpen(true);
    };
  
    const closeModal = () => {
      setIsEditModalOpen(false);
    };

    const handleEdit = (editedProduct) => {
      // TODO
      console.log('Saving edited product:', editedProduct);
      
    };

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    // Profile
    const currentUser = AuthService.getCurrentUser();

    const [userData, setUserData] = useState({});
    const [productsData, setProductsData] = useState([]);
    // const [deletingProductId, setDeletingProductId] = useState(null);
    

    
useEffect(() => {
    const fetchData = async () => {
      try {
        if (currentUser) {
          const userResponse = await getUserById(currentUser.id);
          setUserData(userResponse.data);

          const productsResponse = await getProductsById(currentUser.id);
          setProductsData(productsResponse.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentUser]);

//   Modal
    // const [showDeleteModal, setShowDeleteModal] = useState(false);

    // const handleShowDeleteModal = (productId) => {
    //     setDeletingProductId(productId);
    //     setShowDeleteModal(true);
    //   };
    
    //   const handleHideDeleteModal = () => {
    //     setDeletingProductId(null);
    //     setShowDeleteModal(false);
    //   };


    const deleteProductById = async (id) => {
        try {
          const token = currentUser?.accessToken;
        //   console.log(token)
          
          await axios.delete(`http://localhost:8080/api/v1/products/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
      
          // Updating the all products data after deletion
          setProductsData((prevProducts) => prevProducts.filter(product => product.id !== id));
        } catch (error){
          console.error('Error deleting product:', error);
        }
      };
    // const deleteProductById = async () => {
    //     try {
    //       if (deletingProductId !== null) {
    //         const token = currentUser?.accessToken;
    //         await axios.delete(`http://localhost:8080/api/v1/products/${deletingProductId}`, {
    //           headers: { Authorization: `Bearer ${token}` },
    //         });
    
    //         // Updating the all products data after deletion
    //         setProductsData((prevProducts) => prevProducts.filter(product => product.id !== deletingProductId));
    //       }
    
    //       // Close the modal after deletion
    //       handleHideDeleteModal();
    //     } catch (error) {
    //       console.error('Error deleting product:', error);
    //     }
    //   };

    
    return (
        <div className="container-fluid container-fluid-custom pb-5 mb-5">
            <div>
                <StaticNavBar/>
            </div>
            <div className="row m-lg-4">
                <div className="m-lg-2">
                    <div>
                        <div className="col">
                            <h1>Hey, <strong>{userData?.username}</strong></h1>
                        </div>
                        <div className="col text-end">
                            <MainButton href="/add-offer" value="+ New Offer"/>
                        </div>   
                        <div className="col d-flex align-items-left">
                            <div className="m-lg-6 py-4">
                                <MainButton href="#"
                                        value="Profile"
                                        className={`m-2 ${activeTab === "profile" ? "active" : ""}`}
                                        onClick={() => handleTabClick("profile")}
                                        style={{
                                            border: '2px solid #008000',
                                            backgroundColor: activeTab === 'profile' ? 'white' : '#008000',
                                            color: activeTab === 'profile' ? '#008000' : 'white',
                                            borderRadius: '10px',
                                            padding: '10px 20px',
                                            cursor: 'pointer',
                                            textDecoration: 'none'
                                          }}
                                /> 
                            </div>
                            <div className="m-lg-6 py-4"> 
                                <MainButton href="#" 
                                        value="My Offers" 
                                        className={`m-2 ${activeTab === "offers" ? "active" : ""}`}
                                        onClick={() => handleTabClick("offers")}
                                        style={{
                                            border: '2px solid #008000',
                                            backgroundColor: activeTab === 'offers' ? 'white' : '#008000',
                                            color: activeTab === 'offers' ? '#008000' : 'white',
                                            borderRadius: '10px',
                                            padding: '10px 20px',
                                            cursor: 'pointer',
                                            textDecoration: 'none'
                                          }}
                                /> 

                            </div> 
                    </div> 
                    </div>

                    <div className="container">
                        {/* Render content based on the active tab */}
                        {activeTab === "profile" && (
                        <div className="container mt-5">
                        <h2 className="mb-4">Personal Information</h2>
                        
                        <div className="card p-3">
                          
                          {/* <header className="jumbotron">
                            <h3>
                              <strong>{userData.username}</strong> Profile
                            </h3>
                          </header> */}
                          {/* For testing */}
                          {/* <p>
                              <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
                              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                          </p> */}
                          {/* <p>
                              <strong>Id:</strong> {userData?.id}
                          </p> */}
                          <p>
                            <strong>Username:</strong> {userData?.username}
                          </p>
                          <p>
                            <strong>Email:</strong> {userData?.email}
                          </p>
                          <p>
                            <strong>First Name:</strong> {userData?.firstName}
                          </p>
                          <p>
                            <strong>Last Name:</strong> {userData?.lastName}
                          </p>
                          <p>
                            <strong>Phone Number:</strong> {userData?.phoneNumber}
                          </p>
                          <p>
                            <strong>Address:</strong> {userData?.address}
                          </p>
                          {/* For testing the token */}
                          {/* <strong>Authorities:</strong> {currentUser?.accessToken} */}
                          {/* <ul>
                              {currentUser.roles &&
                              currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                          </ul> */}
                        </div>
                      </div>
                    )} 
                        {activeTab === "offers" && (
                         <div className="container">
                          <table className="table table-striped table-bordered">
                           <thead className="thead-dark">
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
                             {productsData.map((product, index) => (
                               <tr key={index}>
                                 <th scope="row">{index + 1}</th>
                                 <td>{product.name}</td>
                                 <td>
                                   <img
                                     src={product.imageUrl}
                                     alt={product.name}
                                     className="img-fluid"
                                     style={{ maxWidth: '50px', maxHeight: '50px' }}
                                   />
                                 </td>
                                 <td>{product.quantityAvailable}</td>
                                 <td>{product.price}</td>
                                 <td>{product.description}</td>
                                 <td className="d-flex">
                                   <button type="button" className="btn btn-dark mb-2">
                                     <FaEdit className="mr-2" 
                                     onClick={() => openModal(product)}/> Edit
                                   </button>
                                   <button
                                     type="button"
                                     className="btn btn-warning mb-2 ml-2"
                                     onClick={() => deleteProductById(product.id)}
                                   >
                                     <FaDeleteLeft className="mr-2" /> Delete
                                   </button>
                                 </td>
                               </tr>
                               
                             ))}
                           </tbody>
                         </table>
                           <EditProductModal
                              isOpen={isEditModalOpen}
                              onClose={closeModal}
                              product={selectedProduct}
                              onSave={handleEdit}
                            />
                       </div>
                        )} 
                         {/* Modal for deletion */}
                            {/* {showDeleteModal && (
                                <div className="modal">
                                <div className="modal-content">
                                    <p>Are you sure you want to delete this product?</p>
                                    <button onClick={deletingProductId}>Yes</button>
                                    <button onClick={handleHideDeleteModal}>No</button>
                                </div>
                                </div>
                            )} */}
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
