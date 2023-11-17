import MainButton from "../button/MainButton";
import classes from "../registerForm/RegisterForm.module.css"

import { useState, useEffect, useRef } from "react";
import { request } from '../../utils/AxiosHelper'

import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap';
import AuthService from "../../services/AuthService";
import axios from "axios";

function AddOfferForm() {
    const [subcategories, setSubcategories] = useState([]);
    const [subcategoriesByCategory, setsubcategoryByCategory] = useState({});
    const form = useRef();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [subcategory, setSubcategory] = useState(null); 
    const [price, setPrice] = useState(); 
    const [quantityAvailable, setQuantityAvailable] = useState(); 
    const [imageUrl, setImageUrl] = useState('');
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const [fieldErrors, setFieldErrors] = useState({});


    const onChangeName = (e) => {
        const newName = e.target.value;
        setName(newName);
      };
    
      const onChangeDescription = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
      };
    
      const onChangeSubcategory = (e) => {
        const newSubcategory = e.target.value;
        setSubcategory(newSubcategory);
      };
    
      const onChangePrice = (e) => {
        const newPrice = e.target.value;
        setPrice(newPrice);
      };
    
      const onChangeQuantityAvailable = (e) => {
        const newQuantityAvailable = e.target.value;
        setQuantityAvailable(newQuantityAvailable);
      };
    
      const onChangeImageUrl = (e) => {
        const newImageUrl = e.target.value;
        setImageUrl(newImageUrl);
      };

      // Profile
      const currentUser = AuthService.getCurrentUser();

      const addProduct = async () => {
        try {
            const token = currentUser?.accessToken;
        
            const productData = {
              name,
              description,
              subcategory,
              price,
              quantityAvailable,
              imageUrl,
            };
        
            await axios.post('http://localhost:8080/api/v1/products/add', productData, {
              headers: { Authorization: `Bearer ${token}` },
            });
        
            // Clear form fields after successful addition
            setName("");
            setDescription("");
            setSubcategory(null);
            setPrice(0);
            setQuantityAvailable(0);
            setImageUrl("");
        
            setSuccessful(true);
            setMessage("Product added successfully!");

            navigate("/shop");
          } catch (error) {
            console.error('Error adding product:', error);

            // Handle validation errors from the backend
            if (error.response && error.response.data) {
                setFieldErrors(error.response.data);
            }
        
           
            setSuccessful(false);
            setMessage("Error adding product. Please check the form.");
          }
      };


      const handleProductAdd = (e) => {
        e.preventDefault();
        addProduct();
      };



      useEffect(() => {
        // Fetch subcategory data for the specified category from API endpoint
            const apiEndpoint = '/categories/subcategories';
        
            request('GET', apiEndpoint)
                .then((response) => {
                    setSubcategories(response.data);
    
                })
                .catch((error) => {
                    console.error('Error fetching subcategories data:', error);
                });
      
    }, []);

return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white mb-lg-3" >Offer Details</h5>
                            <Form ref={form} onSubmit={handleProductAdd}>

                              {!successful && (
                                <div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="name" className="form-label text-white">Product name</label>
                                            <input type="text" 
                                                    className={`form-control ${
                                                        fieldErrors.name ? "is-invalid" : ""
                                                    }`} 
                                                   id="name" 
                                                   name="name" 
                                                   value={name}
                                                   onChange={onChangeName}
                                                   placeholder="Enter your Product name" 
                                            />
                                            {fieldErrors.name && (
                                                <div style={{ color: 'red', fontSize: '12px' }}>
                                                  {fieldErrors.name}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="quantityAvailable" className="form-label text-white">Quantity</label>
                                            <input type="text" 
                                                   className={`form-control ${
                                                    fieldErrors.quantityAvailable ? "is-invalid" : ""
                                                   }`}  
                                                   id="quantityAvailable" 
                                                   name="quantityAvailable"
                                                   value={quantityAvailable} 
                                                   onChange={onChangeQuantityAvailable}
                                                   placeholder="Quantity" 
                                            />
                                            {fieldErrors.quantityAvailable && (
                                                <div style={{ color: 'red', fontSize: '12px' }}>
                                                  {fieldErrors.quantityAvailable}
                                                </div>
                                            )}
                                        </div>
                                        <div className="col">
                                            <label htmlFor="price" className="form-label text-white">price</label>
                                            <input type="text" 
                                                   className={`form-control ${
                                                    fieldErrors.quantityAvailable ? "is-invalid" : ""
                                                   }`} 
                                                   id="price" 
                                                   name="price"
                                                   value={price} 
                                                   onChange={onChangePrice}
                                                   placeholder="Price" 
                                            />
                                            {fieldErrors.price && (
                                                <div style={{ color: 'red', fontSize: '12px' }}>
                                                  {fieldErrors.price}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imageUrl" className="form-label text-white">Link to Your product Image</label>
                                    <input type="text" 
                                           className={`form-control ${
                                            fieldErrors.imageUrl ? "is-invalid" : ""
                                           }`} 
                                           id="imageUrl" 
                                           name="imageUrl" 
                                           value={imageUrl}
                                           onChange={onChangeImageUrl}
                                           placeholder="Enter a valid Image Url" 
                                          
                                    />
                                    {fieldErrors.imageUrl && (
                                        <div style={{ color: 'red', fontSize: '12px' }}>
                                          {fieldErrors.imageUrl}
                                        </div>
                                    )}
                                </div>
                                <div class="md-3">
                                   <label for="subcategory" className="form-label text-white">Category</label>
                                   <select 
                                            className={`form-select ${
                                                fieldErrors.subcategory ? "is-invalid" : ""
                                            }`} 
                                           id="validationServer04" 
                                           aria-describedby="validationServer04Feedback" 
                                           onChange={onChangeSubcategory}
                                           value={subcategory || ""}
                                    >

                                        {subcategories.forEach((subcategory) => {
                                            if (!subcategoriesByCategory[subcategory.category]) {
                                                subcategoriesByCategory[subcategory.category] = [];
                                            }
                                            subcategoriesByCategory[subcategory.category].push(subcategory);
                                        })}

                                        <option selected disabled value="">Choose...</option>

                                        {Object.entries(subcategoriesByCategory).map(([category, subcategoriesInCategory]) => (
                                        
                                          <optgroup key={category} label={category}>

                                            {subcategoriesInCategory.map((filteredSubcategory) => (
                                              <option key={filteredSubcategory.name} value={filteredSubcategory.name}>
                                                {filteredSubcategory.name}
                                              </option>
                                            ))}
                                            
                                          </optgroup>
                                        ))}
                                    </select>
                                        {fieldErrors.subcategory && (

                                        <div
                                            id="validationServer04Feedback"
                                            className="invalid-feedback"
                                        >
                                            {fieldErrors.subcategory}
                                        </div>
                                        )}
                                </div>
                                <div className="col">
                                     <label htmlFor="description" className="form-label text-white">Description</label>
                                     <textarea type="text" 
                                                className={`form-control mb-4 ${
                                                    fieldErrors.description ? "is-invalid" : ""
                                                }`} 
                                               id="description" 
                                               name="description" 
                                               value={description}
                                               onChange={onChangeDescription}
                                               placeholder="Description" 
                                    />
                                    {fieldErrors.description && (
                                        <div style={{ color: 'red', fontSize: '12px' }}>
                                          {fieldErrors.description}
                                        </div>
                                    )}
                                </div>
                                    <div className="d-grid gap-2 justify-content-center">
                                        <button type="submit" className={classes.button} >
                                            Add Product
                                        </button>
                                    </div>
                                </div>
                               )}
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOfferForm;