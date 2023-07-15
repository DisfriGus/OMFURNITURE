import React from 'react'
import Layout from '../Component/Layout'
import Navbar from '../Component/Navbar'
import Banner from '../Component/ProductsPage/Banner'
import TopPickCard from '../Component/ProductsPage/TopPickCard'
import TopPickSlider from '../Component/ProductsPage/TopPickSlider'
import SliderComponent from '../Component/ProductsPage/SliderComp'
import FeaturedProductsCard from '../Component/ProductsPage/FeaturedProductsCard'
import FeaturedProductsSlider from '../Component/ProductsPage/FeaturedProductsSlider'
import Footer from '../Component/Footer'

const Products = () => (
    <>
        <Navbar />
        <Layout>
            {/* banner */}
            <Banner />
            {/* banner */}
            <TopPickSlider />
            <FeaturedProductsSlider />


        </Layout>
        <br />
        <br />
        <br />
        <br />
        <br />

        <Footer />

    </>
)

export default Products