import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portly Wobbly Peafowl</title>
        <meta property="og:title" content="Portly Wobbly Peafowl" />
      </Helmet>
    </div>
  )
}

export default Home
