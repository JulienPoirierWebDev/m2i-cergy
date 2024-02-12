import Logo from '../src/assets/logo.png';
import './App.css'


function App() {


  return (
    <>
      <div className="flex flex-col items-center">

        <img className='m-6' src={Logo}/>
        <div className="flex items-center space-x-7">
       <a className='font-bold text-custom'>Our Hotel</a>
       <a className='font-bold text-custom'>Rooms & Rates</a>

       <a className='font-bold text-custom'>Facilities</a>
       <a className='font-bold text-custom '>Contact Us</a>
       </div>
      </div>
     <div className='bg-dark'>

     <select>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
      <button className=''> Check In</button> 
      <button className=''>Check Out</button>
      <button className=''>Check Availability</button>
     </div>
    </>
  )
}

export default App
