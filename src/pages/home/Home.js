import React from 'react'
import './Home.css'
import ShopItems from '../../components/shop-items/ShopItems'
import Layout from '../../components/layout/Layout'
import Slider from '../../components/slider/Slider'

const Home = () => {
    return (
        <Layout>
            <Slider />
            <ShopItems />
        </Layout>
    )
}

export default Home