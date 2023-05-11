import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../images.react/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer  = () => {
useEffect(() =>{
  Aos.init({duration:2000})
}, [])
  return (
     <section className='footer'>
      <div className='videoDiv'>  
        <video src={video2} loop autoPlay muted type='video/mp4'>
        </video> 
   </div>    
      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div  data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
            </div>
            <div className='inputDiv flex'>
              <input  data-aos="fade-up" type='text' placeholder='Enter Email Address' />
              <button  data-aos="fade-up" className='btn flex' type='submit'>
             SEND   <FiSend className='icon'/>
              </button>
            </div>
          </div>
        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
<MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>
            <div  data-aos="fade-up" className='footerParagraph'>
            The rivers in India play an important role in the lives of its people. They provide 
            potable water, cheap transportation, electricity, and the 
            livelihood for many people nationwide. This easily explains 
            why nearly all the major cities of India are located by the
             banks of rivers.
            </div>
            <div  data-aos="fade-up" className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <BsYoutube className='icon'/>
              <FaInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>
            <div className='footerLinks grid'>
            <div  data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Services
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Payment
              </li>
              </div>
        <div  data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Rentcars
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Trivago
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                TripAdvisor
              </li>
               </div>
       <div  data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
              LAST MINUTE
              </span>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Andhra Pradesh
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Alaknanda
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Madhya Pradesh
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Maharashtra
              </li>
              <li className='footerList flex'>
                <FiChevronRight className='icon'/>
                Uttarakhand
              </li>
              </div>
              </div>
              <div className='footerDiv flex'>
                <small>BEST TRAVEL WEBSITE THEME</small>
                <small>COPYRIGHTS RESERVED - 2023</small>
              </div>
              </div>
            </div>
     </section>
  )
}
export default Footer;
