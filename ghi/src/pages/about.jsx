import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <motion.div
                className="bg-blue-500 text-white text-center py-20 lg:py-32"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                    About Running Fridge
                </h1>
                <p className="mb-8">
                    My name is Trevor, I have served in the Marine corps in communications and worked in the IT industry for 10 years. I’ve taken a software engineering bootcamp and have some programming skills along with pursuing my BS in programming currently. With that, I’m always looking at current issues in our world, and my personal life, that can be addressed by a new application! This is why developed Running Fridge and look forward to its mass adoption.

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

export default About
