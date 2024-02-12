import Logo from '../src/assets/logo.png';
import ImgHome from '../src/assets/home.png'
import TaxiLogo from '../src/assets/taxi.png'
import PiscineLogo from '../src/assets/piscine.png'
import WifiLogo from '../src/assets/wifi.png'
import FitnessLogo from '../src/assets/fitness.png'
import KitchenLogo from '../src/assets/kitchen.png'
import Search from '../src/assets/search.png'

import './App.css'


function App() {


  return (
    <>
      <div className="flex flex-col items-center">

        <img className='m-6' src={Logo}/>
        <div className="flex items-center space-x-7 m-2" >
       <a className='font-bold text-custom'>Our Hotel</a>
       <a className='font-bold text-custom'>Rooms & Rates</a>

       <a className='font-bold text-custom'>Facilities</a>
       <a className='font-bold text-custom '>Contact Us</a>
       <img src={Search}/>
       </div>
      </div>
     <div className='bg-black p-6 flex justify-center' >

     <button className='text-black border bg-white m-1 rounded-lg p-2 text-colorbutton'> Select a City</button> 
      <button className='text-black border bg-white m-1 rounded-lg p-2 '> Check In</button> 
      <button className='text-black border bg-white m-1 rounded-lg p-2 ' >Check Out</button>
      <button className='text-black border bg-customRgb text-white rounded-lg p-2 '>Check Availability</button>
     </div>
     <div className='relative h-screen'>

      <img src={ImgHome} className=' absolute' />
      <p className='text-white font-bold absolute text-6xl text-center w-full top-[320px] '>WELCOME TO BON HOTEL</p>
      <p className='text-white font-bold absolute text-center w-full top-96'>
      Good people. Good thinking. Good feeling.
      </p>
      <a className='bg-customRgb p-5 text-white absolute justify-center top-96 left-96 rounded-lg ml-10 mt-10'>
        EXPLORE
      </a>
     </div>
     <div className='border-1 absolute bg-white top-96 flex flex-col bottom-0' >
      <h1 className='text-colorfacility flex justify-center text-4xl font-bold'>Facilities</h1>
      <div className='flex justify-center '>
      <span className='text-custom m-3'> <img className='m-4' src={KitchenLogo} /> Kitchen</span>
      <span className='text-custom m-3'> <img className='m-4' src={PiscineLogo} />  Pool</span>
      <span className='text-custom m-3'>  <img className='m-4' src={WifiLogo} /> Wifi</span>
      <span className='text-custom m-3'> <img className='m-4' src={FitnessLogo} />  Gym</span>
      <span className='text-custom m-3'>  <img className='m-4' src={TaxiLogo} /> Taxi</span>
      </div>

     </div>
    </>
  )
}

export default App
