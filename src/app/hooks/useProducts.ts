import { useState, useEffect } from "react";
import { Product, fetchProducts } from "../services/product.service";

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (err) {
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, loading, error };
};

export default useProducts;
