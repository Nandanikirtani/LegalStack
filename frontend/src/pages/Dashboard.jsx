import React from 'react'
import ChatWindow from "../components/ChatWindow"
import Navbar from '../components/Navbar'
import Pdfupload from '../components/Pdfupload'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
     <Navbar/>
   
    <div className='min-h-screen px-4 py-12 md:p-20 bg-[#0f172a]'>
      <div className='flex flex-col md:flex-row mt-12 text-white gap-10 justify-between'>
        <div className='order-2 md:order-1'><Pdfupload/></div>
        <div className='order-1 md:order-2 w-full md:max-w-4xl '>
          <ChatWindow/>
        </div>
      </div>
      
    </div>
    <Footer/>
     </>
  )
}

export default Dashboard
