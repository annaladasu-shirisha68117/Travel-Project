import React, {useEffect} from 'react'
import './main.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img from '../../images.react/img2.png'
import img2 from '../../images.react/img3.png'
import img3 from '../../images.react/img4.png'
import img4 from '../../images.react/img5.png'
import img5 from '../../images.react/img6.png'
import img6 from '../../images.react/img7.png'
import img7 from '../../images.react/img8.png'
import img8 from '../../images.react/img9.png'
import img9 from '../../images.react/img10.png'
import img10 from '../../images.react/img11.png'
import img11 from '../../images.react/img12.png'
import img12 from '../../images.react/img13.png'

import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
const Data = [
  {
    id: 1,  
    imgSrc: img,
    destTitle: '	Ganges',
    location: ' Patna',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Originating at Gaumukh from Gangotri glacier of the Himalayas, the river is called Bhagirathi at the source and acquires the name Ganges from Devprayag onwards where it meets the Alaknanda.',

  },
  {
  id: 2,
  imgSrc: img2,
  destTitle: 'Brahmaputra	',
  location: 'Guwahati',
  grade: 'CULTURAL RELAX',
  fees: '$600',
  description: 'Renowned as the largest river in India (considering water flow), the Brahmaputra river travels 2,900 km from source to the union point.',
},
{
 id: 3,
 imgSrc: img3,
 destTitle: '	Indus',
 location: 'Kargil',
 grade: 'CULTURAL RELAX',
 fees: '$700',
 description: 'A major portion (over 60 percent) of the Indus basin catchment area lies in Pakistan. Indus Waters Treaty between India and Pakistan allows India to use 20 percent of the total water carried by the Indus river.',
},
{
  id: 4,
  imgSrc: img4,
  destTitle: 'Godavari',
  location: 'Trimbakeshwar',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'It originates in the Western Ghats near Trimbakeshwar in Nashik district of Maharashtra. This river is amongst one of the highly venerated rivers in India and finds mention in several Hindu scriptures.',
 },
 {
  id: 5,
  imgSrc: img5,
  destTitle: 'Narmada',
  location: 'Bharuch',
  grade: 'CULTURAL RELAX',
  fees: '$900',
  description: 'Rising near the Amarkantak range of mountains in Madhya Pradesh, the Narmada is the largest west flowing river in Peninsular India.',
 },
 {
  id: 6,
  imgSrc: img6,
  destTitle: 'Krishna',
  location: 'Vijayawada',
  grade: 'CULTURAL RELAX',
  fees: '$590',
  description: 'Also known as Krishnaveni, the Krishna river has its origin in the Western Ghats near Mahabaleshwar in Maharashtra.',
 },
 {
  id: 7,
  imgSrc: img7,
  destTitle: 'Yamuna',
  location: 'Delhi',
  grade: 'CULTURAL RELAX',
  fees: '$540',
  description: 'The river Yamuna is worshipped as goddess Yamuna by Hindus and is highly venerated in Hinduism. The Tons river is its largest tributary flowing through the Garhwal region in Uttarakhand',
 },
 {
  id: 8,
  imgSrc: img8,
  destTitle: '	Indus',
  location: 'Bay of Bengal',
  grade: 'CULTURAL RELAX',
  fees: '$500',
  description: 'Rising from an elevation of 442 meters (1,450 ft) in the hills of southeastern Chhattisgarh, Mahanadi is one of the major rivers in India.',
 },
 {
  id: 9,
  imgSrc: img9,
  destTitle: 'Mahanadi',
  location: 'Cuttack',
  grade: 'CULTURAL RELAX',
  fees: '$450',
  description: 'The largest river in Tamil Nadu, Kaveri (Cauvery) river has its origin in the foothills of the Western Ghats at Talakaveri in Kodagu district of Karnataka',
 },
 {
  id: 10,
  imgSrc: img10,
  destTitle: 'Tapti',
  location: 'Burhanpur',
  grade: 'CULTURAL RELAX',
  fees: '$350',
  description: 'Flowing westwards through Madhya Pradesh, Maharashtra and Gujarat over a length of 724 km, the Tapti (or Tapi) river originates from Gawilgarh Hills in Satpura range of central Deccan plateau. It drains into the Arabian sea through the Gulf of Khambhat.',
 },
 {
  id: 11,
  imgSrc: img11,
  destTitle: 'Sutlej',
  location: ' Rupnagar',
  grade: 'CULTURAL RELAX',
  fees: '$520',
  description: 'An ancient river and the easternmost tributary of the Indus river, the Sutlej river has its source in lake Rakshastal in Tibet. It is the longest of the five rivers that give the state of Punjab its name.',
 },

 {
  id: 12,
  imgSrc: img12,
  destTitle: 'Tungabhadra',
  location: 'Kurnool',
  grade: 'CULTURAL RELAX',
  fees: '$500',
  description: 'Formed by the confluence of the Tunga River and the Bhadra River at Koodli in Shimoga district of Karnataka, the Tungabhadra river is a major tributary of the Krishna river.',
 },
]

const Main  = () => {
   useEffect(() =>{
    Aos.init({duration:2000})
   }, [])

  return (
    <section className='main container section'>
<div className='secTitle'>
  <h3  data-aos="fade-up" className='title'> Most visited destinations </h3>

</div>
<div className='secContent grid'>
  {
    Data.map(({id, imgSrc,destTitle, location, grade, fees, description}) => {
return(
  <div key={id}  data-aos="fade-up" className="singleDestination">
<div className='imageDiv'>
  <img src={imgSrc} alt={destTitle} />
</div>
<div className='cardInfo'>
  <h4 className='destTitle'>{destTitle}</h4>
  <span className='continent flex'>
    <HiOutlineLocationMarker className='icon' />
    <span className='name'>{location}</span>
  </span>
  <div className='fees flex'>
    <div className='grade'>
      <span>{grade}<small>+1</small></span>
    </div>
    <div className='price'>
      <h5>{fees}</h5>
    </div>
  </div>
  <div className='desc'>
    <p>{description}</p>
  </div>
  <button className='btn flex'>
    DETAILS <HiOutlineClipboardCheck className='icon'/>
  </button>
</div>
  </div>
)
    }) 
  }
</div>
    </section>

  )
}

export default Main;