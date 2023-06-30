import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation} from 'react-router-dom';
import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div >
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default Home
