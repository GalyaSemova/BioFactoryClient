import React, { useState, useEffect } from "react";

import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";
import MainButton from "../../components/button/MainButton";
import EditProductModal from "./EditProductModal";
import DeleteProductModal from "./DeleteProductModal";

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

    // Profile
    const currentUser = AuthService.getCurrentUser();

    // Validations
    const [fieldErrors, setFieldErrors] = useState({});

    const [userData, setUserData] = useState({});
    const [productsData, setProductsData] = useState([]);
  

    // Delete product modal implementation
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedProductForDelete, setSelectedProductForDelete] = useState(null);

    const handleShowDeleteModal = (product) => {
      setSelectedProductForDelete(product);
      setIsDeleteModalOpen(true);
    };

    const handleHideDeleteModal = () => {
      setSelectedProductForDelete(null);
      setIsDeleteModalOpen(false);
    };
    
    // Edit modal impl

    const openModal = (product) => {
      setSelectedProduct(product);
      setIsEditModalOpen(true);
    };
  
    const closeModal = () => {
      setIsEditModalOpen(false);
    };

    const handleEdit = async (editedProduct) => {
      try {

        console.log('Editing product:', editedProduct);
        const token = currentUser?.accessToken;
    
        await axios.patch(
          `http://localhost:8080/api/v1/products/${editedProduct.id}`,
          editedProduct, // Include the updated product data in the request body
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log('Apicall done:', editedProduct);
    
        setProductsData((prevProducts) =>
          prevProducts.map((product) =>
            product.id === editedProduct.id ? editedProduct : product
          )
        );
    
        console.log('Product successfully edited:', editedProduct);
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          setFieldErrors(error.response.data.errors);
        } else {
          console.error('Error editing product:', error);
        }   
      }
    };

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
   
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
                                     onClick={() => handleShowDeleteModal(product)}
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
                              fieldErrors={fieldErrors} 
                            />
                            <DeleteProductModal
                                isOpen={isDeleteModalOpen}
                                onClose={handleHideDeleteModal}
                                onDelete={() => deleteProductById(selectedProductForDelete?.id)}
                                productName={selectedProductForDelete?.name}
                            />
                       </div>
                        )} 
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
