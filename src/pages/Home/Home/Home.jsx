import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import PopularItems from '../PopularItems/PopularItems'
import Featured from '../Featured/Featured'
import Testimonials from '../Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Kalabhuna | Home</title>
      </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularItems></PopularItems>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home