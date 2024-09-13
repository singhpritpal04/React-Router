import { useState } from 'react'
import './App.css'
import { Footer, Header} from './components';
import {Outlet} from "react-router-dom";


export default function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
}
