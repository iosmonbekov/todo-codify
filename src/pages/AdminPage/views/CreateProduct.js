import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../../api/api";
import { ProductModel } from "../../../models/ProductModel";
import './CreateProduct.css';

function CreateProduct() {
    const [form, setForm] = useState(new ProductModel());

    const navigate = useNavigate();

    const createProduct = async (body) => {
        if (Object.values(body).some((el) => !el)) throw Error('must not be blank');
        return await addProduct(body);
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await createProduct(form);
            navigate('/admin');
        } catch (error) {
            console.log(error);
        }
    }
    return <div className="create-product-wrapper">
        <form className="create-product-form" onSubmit={onFormSubmit}>
            <div className="create-product-name-field">
                <label>Name</label>
                <input type="text" name="name" value={form.name} onInput={(e) => setForm((form) => ({ ...form, name: e.target.value }))} />
            </div>
            <div className="create-product-price-field">
                <label>Price</label>
                <input type="text" name="price" value={form.price} onInput={(e) => setForm((form) => ({ ...form, price: e.target.value }))} />
            </div>
            <div className="create-product-image-field">
                <label>Image Link</label>
                <input type="text" name="img" value={form.img} onInput={(e) => setForm((form) => ({ ...form, img: e.target.value }))} />
            </div>
            <div className="create-product-image-preview">
                {
                    form.img && <img src={form.img} alt={'Link doesn\'t work correctly! Please change it.'} />
                }
            </div>

            <button>Add Product</button>
        </form>
    </div>
}


export default CreateProduct;
