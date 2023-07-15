import React from 'react'
import Layout from '../Component/Layout'
import Navbar from '../Component/Navbar'
import Banner from '../Component/ProductsPage/Banner'

const Products = () => (
    <>
        <Navbar />
        <Layout> 
            {/* banner */}
            <Banner />
            {/* banner */}
            

        </Layout>
    </>
)

export default Products