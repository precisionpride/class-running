import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Info = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <motion.div
                className="bg-blue-500 text-white text-center py-20 lg:py-32"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                    General Specifications
                </h1>
                <p className="mb-8">

                    (or equivalents)<br></br>
                    OS: windows 10+ <br></br>                                                   Web browser: Edge, Firefox, Chrome<br></br>
                    CPU: dual core i3 (gen8+)<br></br>                                                     Peripherals: KVM<br></br>
                    Mother board w/ integrated graphics card<br></br>                             Up to date drivers<br></br>
                    RAM: 8 GB<br></br>
                    Network adapter<br></br>
                    Storage device w/ 5 GB free space<br></br>
                    Cooling system<br></br>

                    Running Fridge allows you to sign up and create an account secured by JWTdown tokens. With this you can easily access your grocery items on hand and add new ones as well. You can also use our AI services to create recipes. Input the items manually or scan the QR code at select stores to auto input all the grocery info immediately! All you need is a computer with a web browser/camera and an internet connection. We currently support all PCs and are working on refining our application for mobile devices!


                </p>
                <motion.a
                    href="#features"
                    className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link to={"/login"}>
                        Get Started
                    </Link>
                </motion.a>
            </motion.div>
            <motion.div
                className="flex flex-col md:flex-row justify-around items-center bg-gray-100 py-16"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.5 },
                    },
                }}
            >
                {['Fresh Ingredients', 'Easy Recipes', 'Healthy Options'].map(
                    (feature, index) => (
                        <FeatureCard key={index} title={feature} />
                    )
                )}
            </motion.div>
            <footer className="bg-blue-700 text-white text-center p-4">
                © {new Date().getFullYear()} Running Fridge - All rights reserved.
            </footer>
        </div>
    )
}

const FeatureCard = ({ title }) => {
    return (
        <motion.div
            className="card bg-white rounded-xl shadow-lg p-6 m-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <h2 className="font-semibold text-xl">{title}</h2>
            <p>Learn more about our {title.toLowerCase()}.</p>
        </motion.div>
    )
}

export default Info
