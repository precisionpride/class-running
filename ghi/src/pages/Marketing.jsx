import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Market = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <motion.div
                className="bg-blue-500 text-white text-center py-20 lg:py-32"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                    Come Join Running Fridge!

                </h1>
                <p className="mb-8">
                    <p className="mb-8">
                        The totally free grocery app!
                        <div className="flex space-x-4">
                            <img
                                src="https://c8.alamy.com/comp/ADAPFJ/groceries-in-shopping-basket-ADAPFJ.jpg"
                                alt="Groceries in Shopping Basket"
                                width="500px"
                                height="500px"
                            />
                            <img
                                src="https://hips.hearstapps.com/hmg-prod/images/ghi-foodtrackerapps-6450154a4aac3.png?crop=0.503xw:1.00xh;0.112xw,0&resize=640:*"
                                alt="Groceries in Shopping Basket"
                                width="500px"
                                height="500px"
                            />
                        </div>
                    </p>
                    SAVE Money & Time!!!!

                    HATE WASTING FOOD?
                    Food waste is a major issue in our world. Americans throw out hundreds of pounds of food a year! If your heart sinks throwing out food you with you didn’t forget, or realized it expired yesterday, or just don’t know how to use an expiring item with what you have on hand? Then running Fridge is your solution! We offer the only QR code receipt reader for select stores that auto inputs your groceries with all the information you'd need! Cost, amount, nutrition, and of course expiration! Running Fridge will notify you when an item comes close to expiring and give your recipes to use with it using other things you have on hand!

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

export default Market
