import React from 'react'
import HeaderCarousal from '../UI/Home/HeaderCarousal'
import Categories from '../UI/Home/Categories'
import Bestseller from '../UI/Home/Bestseller'
import NewArrivals from '../UI/Home/NewArrivals'

function Home() {
  return (
    <div>
      <HeaderCarousal />
      <Categories />
      <Bestseller />
      <NewArrivals />
    </div>
  )
}

export default Home