import axios from "axios";

const URL = "https://fakestoreapi.com/products";

// Fetch all products
export const fetchProducts = async () => {
    const response = await axios.get(URL);
    return response.data; // Return the array of products
};

// Fetch a product by ID
export const fetchProductById = async (id) => {
    const response = await axios.get(`${URL}/${id}`); // Fetch the specific product by ID
    return response.data; // Return the product details
};

