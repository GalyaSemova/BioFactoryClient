import MainButton from "../button/MainButton";
import classes from "../registerForm/RegisterForm.module.css"

function AddOfferForm() {
    return (

        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className={classes.glass_card}>
                        <div className="card-body">
                            <h5 className="card-title text-center text-white mb-lg-3" >Offer Details</h5>
                            <form>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="name" className="form-label text-white">Product name</label>
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your Product name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="quantity" className="form-label text-white">Quantity</label>
                                            <input type="text" className="form-control" id="quantity" name="quantioty" placeholder="Quantity" />
                                        </div>
                                        <div className="col">
                                            <label htmlFor="price" className="form-label text-white">price</label>
                                            <input type="text" className="form-control" id="price" name="price" placeholder="Price" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imgUrl" className="form-label text-white">Link to Your product Image</label>
                                    <input type="text" className="form-control" id="imgUrl" name="imgUrl" placeholder="Enter a valid Image Url" required />
                                </div>
                                <div class="md-3">
                                    <label for="validationServer04" className="form-label text-white">Category</label>
                                    <select class="form-select" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                        <option selected disabled value="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                    {/* <div id="validationServer04Feedback" class="invalid-feedback">
                                        Please select a valid category.
                                    </div> */}
                                </div>
                                <div className="col">
                                     <label htmlFor="description" className="form-label text-white">Description</label>
                                     <textarea type="text" className="form-control mb-4" id="description" name="description" placeholder="Description" />
                                </div>
                                <div className="d-grid gap-2 justify-content-center">
                                    <MainButton value="Create Product" href="/"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddOfferForm;