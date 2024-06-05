'use client';
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { motion } from "framer-motion";
import {useEffect, useState} from "react";
import ProductLoadingShimmer from "@/app/components/ProductLoadingShimmer";

const ProductGrid = () => {
    const { products, loading, error } = useProducts();
    const [isModalOpen, setModalOpen] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [detaiProduct, setDetaiProduct] = useState<any>();


    useEffect(() => {
        if (isModalOpen) {
            setIsModalVisible(true);
        } else {
            // Set a delay to allow the closing animation to complete before removing the modal from the DOM
            const timer = setTimeout(() => setIsModalVisible(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isModalOpen]);

    const addDefaultImg = (ev: any) => {
        ev.target.src = "https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    }

    if (error) {
        return <p className="text-center py-16 text-red-500">{error}</p>;
    }

    const handleCloseEvent = (e: any) => {
        setModalOpen(true)
       setDetaiProduct(e)
    }

    return (
        <section id="products" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold mb-8 text-center">Our Products</h2>
                {loading ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {
                           [1,2,3,4,5,6,7,8,9,10].map((item: any) => (
                               <>
                                   <ProductLoadingShimmer key={item.id} />
                               </>
                           ))
                        }
                    </div>
                    ): (
                    <>
                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {opacity: 0},
                                visible: {opacity: 1, transition: {staggerChildren: 0.2}},
                            }}
                        >
                            {products.map((product) => (
                                <motion.div
                                    key={product.id}
                                    variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0}}}
                                >
                                    <ProductItem onDetailClick={handleCloseEvent} {...product} />
                                </motion.div>
                            ))}
                        </motion.div>

                    </>) }
                {isModalVisible && (
                    <>
                    <div
                    className={`justify-center items-center flex overflow-hidden bg-black bg-opacity-80 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
            >
                <div
                    className={`relative w-auto my-6 mx-auto max-w-3xl transition-transform duration-300 transform ${isModalOpen ? 'scale-100 animate-rubberBand' : 'scale-90'}`}>
                    <div
                        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="relative p-6 flex-auto">
                                        <div className="flex flex-col gap-3">
                                            <img src={detaiProduct.image} alt="" onError={addDefaultImg} className="w-full" />
                                            <div className="flex flex-row justify-between gap-3">
                                                <h3 className="flex font-extrabold flex-col gap-3">
                                                    {detaiProduct.name || 'Tidak ada nama produk'}
                                                </h3>
                                                <div className="flex font-bold flex-col gap-3">
                                                    Product ID: {detaiProduct.id || 'Tidak ada ID produk'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setModalOpen(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${isModalOpen ? 'opacity-25' : 'opacity-0'}`}></div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ProductGrid;
