import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Userguide = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <motion.div
                className="bg-blue-500 text-white text-center py-20 lg:py-32"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                    Userguide
                </h1>
                <p className="mb-8">
                    The homepage of Running fridge consists of a user interface displaying several navigational menus and features that are listed below.<br></br>
                    •	Far Right – My Fridge Navigation bar<br></br>
                    •	Top Right Body Button – Accounts Menu (Not operational)<br></br>
                    •	Top Right Search Bar – Search for items (Not Operational)<br></br>
                    •	Top Left – Homepage button<br></br>
                    •	Bottom features – Access AI integrated features (Not Operational)<br></br>
                    •	Center – Get started/quick Login<br></br>
                    My Fridge – Displays links to add items to the users inventory categories, as well as links to view items stored in each inventory category.<br></br> Can be collapsed and expanded by clicking the arrow button.<br></br>
                    Accounts Menu - Displays buttons to access the Profile, Homepage, Sign UP, and Login.<br></br><div></div>

                    <div></div>NOTE: Currently users cannot access the Sign Up page from the front end of the application.<br></br> To Sign Up, users must access the back end directly through the swagger interface (See section 3.2. Accessing Backend/Frontend)<br></br> We here at Running Fridge are working on this issue and will release an updated version of this document when the bug is fixed.<br></br>
                    Search Bar – Search for items that are stored in any of your inventories<br></br>
                    Homepage Button – Returns user to the homepage, is present on every page of the application.<br></br>
                    AI Integrated Features – Uses an AI third party API that analyzes items in the users inventory and provides services such as descriptions/ general item nutrition, recipes, and healthy substitutes for items.<br></br>
                    Get started – Takes the user to the Login page<br></br>
                    4.1.	Sign Up<br></br>

                    To create an account, Sign Up through the swagger interface by clicking onto POST /api/auth/accounts, then click on “Try it out”.<br></br> You are now able to input data to the database. In the Request Body section replace “string” with your desired username and password,<br></br> making sure to keep the quotation marks (“”) around your characters to ensure the inputs datatype is sent to the database correctly.<br></br> Hit execute, server responses should show 200 code, and the correct CRUD response information from section 3.3. If you encounter issues or errors, go through these steps.
                    •	Ensure you are in the accounts tab of swagger<br></br>
                    •	Ensure no other characters were added/deleted besides the characters, s t r i n g<br></br>
                    •	Maintain quotes (“ ”) around both of your inputs for Username and Password<br></br>
                    •	Maintain a comma at the end of your first input<br></br>
                    •	Refresh the page and try again<br></br>
                    If you still encounter issues signing up, call our technical support for further assistance.<br></br>

                    4.1.Log In<br></br>

                    From the homepage, click Get Started. A login page will display to enter account information. Enter account information and click login. If errors are encountered follow these steps.<br></br>
                    •	Ensure correct spelling<br></br>
                    •	Ensure caps lock/num lock off<br></br>
                    •	Ensure account is stored in database<br></br>
                    •	Check docker container is running without errors for ports 8081 & 8000<br></br>
                    If you still encounter issues logging in, call our technical support for further assistance.<br></br>
                    4.2.Add Item<br></br>

                    NOTE: For purposes of this document the term “Item” will refer to any of the 5 inventory categories (Beverages, Dairy, Grains, Produce, Protein).<br></br>
                    To add an item, access the My Fridge navigation menu from any page, and click any button labeled Add “Item”.  The Add a New “Item” page displays several inputs to describe the “Item”.<br></br>
                    Input each description appropriately by examining the actual product case for the information and hit Add to Fridge. If any errors are encountered follow these steps.<br></br>
                    •	Refresh the page, fill out form, and hit Add to Fridge<br></br>
                    •	Check the “Items” inventory page. Verify “Item” added is present in inventory.<br></br>
                    •	Check docker container is running without errors for ports 8081 & 8000<br></br>

                    If you still encounter issues, call our technical support for further assistance.<br></br>





                    4.3.Item Inventory<br></br>

                    To view inventory, access the My Fridge navigation menu from any page, click on the desired category. If you have added “Items” successfully they will display here.<br></br> Each “Item” will show the original details submitted, including 3 buttons Detail, Delete, and Update.<br></br>
                    •	Detail – Displays the original details (to be expanded upon in future updates)<br></br>
                    •	Delete – Permanently deletes from inventory<br></br>
                    •	Update – Allows user to edit details<br></br>
                    If any issues are encountered on this page, refresh and try again. If you still encounter issues, call our technical support for further assistance.<br></br>
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

export default Userguide
