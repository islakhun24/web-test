'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon } from "@heroicons/react/solid";
import Image from "next/image";

type ProductProps = {
    id: number;
    name: string;
    image: string;
    onDetailClick: (e: any) => void;
};



const ProductItem: React.FC<ProductProps> = ({ id, name, image, onDetailClick }) => {
    const handleOpenModal = () => {
        onDetailClick({id, name, image});
    };

    const addDefaultImg = (ev: any) => {
        ev.target.src = "https://liftlearning.com/wp-content/uploads/2020/09/default-image.png"
    }

    return (
        <motion.div
            className="border rounded-lg p-4 shadow-md bg-white hover:shadow-xl transition-shadow "
            whileHover={{ scale: 1.05 }}
        >
            <img
                src={image}
                alt={name}
                onClick={handleOpenModal}
                className="w-full h-48 object-cover mb-4 cursor-pointer rounded-md"
                onError={addDefaultImg}
            />
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold truncate">{name || 'Tidak ada Nama Product'}</h3>
                <EyeIcon className="w-5 h-5 text-gray-600 cursor-pointer" onClick={() => handleOpenModal()} />
            </div>
            <p className="text-gray-500">ID: {id || 'Tidak ada ID'}</p>
        </motion.div>
    );
};

export default ProductItem;
