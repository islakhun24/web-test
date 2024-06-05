'use client';
import { motion } from "framer-motion";

const CompanyDescription = () => {
    return (
        <section id="about" className="py-16 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-4xl font-bold mb-6">Welcome to Our Company</h2>
                    <p className="text-lg leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor
                        augue sed commodo varius. Morbi consequat tincidunt neque, a ultricies
                        ligula placerat sit amet. Vivamus at erat non mi scelerisque
                        fermentum ut a felis.
                    </p>
                    <img
                        src="https://www.pngall.com/wp-content/uploads/8/Retail-Business-PNG-File-Download-Free.png"
                        alt="Company"
                        className="mx-auto mb-4 rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyDescription;
