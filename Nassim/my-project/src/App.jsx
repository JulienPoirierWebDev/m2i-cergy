import Logo from "../src/assets/logo.png";

/* import ImgHome from '../src/assets/home.png' */
import TaxiLogo from "../src/assets/taxi.png";
import Appart1 from "../src/assets/appart1.png";
import Appart2 from "../src/assets/appart2.png";
import PiscineLogo from "../src/assets/piscine.png";
import WifiLogo from "../src/assets/wifi.png";
import FitnessLogo from "../src/assets/fitness.png";
import KitchenLogo from "../src/assets/kitchen.png";
import Search from "../src/assets/search.png";
import logofooter from "../src/assets/logofooter.png";

import "./App.css";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center ">
        <img className="m-6" src={Logo} />
        <div className="flex items-center space-x-2 md:space-x-4 xl:space-x-7 m-1 p-1 md:text-xl xl:text-xl">
          <a
            className="font-bold text-custom 
          "
          >
            Our Hotel
          </a>
          <a className="font-bold text-custom">Rooms & Rates</a>

          <a className="font-bold text-custom">Facilities</a>
          <a className="font-bold text-custom ">Contact Us</a>
          <img src={Search} />
        </div>
      </div>
      <div className="bg-black p-6 flex justify-center">
        <button className="text-black border bg-white m-1 rounded-lg p-2 text-colorbutton">
          {" "}
          Select a City
        </button>
        <button className="text-black border bg-white m-1 rounded-lg p-2 ">
          {" "}
          Check In
        </button>
        <button className="text-black border bg-white m-1 rounded-lg p-2 ">
          Check Out
        </button>
        <button className="text-black border bg-customRgb text-white rounded-lg p-2 ">
          Check Availability
        </button>
      </div>
      <div className="relative flex justify-center items-center w-screen h-screen bg-[url(/home.png)] bg-cover">
        <div className="flex flex-col justify-center items-center">
          <p className="text-white font-bold  text-6xl text-center w-full top-[320px] ">
            WELCOME TO BON HOTEL
          </p>
          <p className="text-white font-bold  text-center w-full top-96">
            Good people. Good thinking. Good feeling.
          </p>
          <a className="bg-customRgb p-5 text-white font-bold w-5/12 text-center rounded-lg xl:ml-10 mt-12">
            EXPLORE
          </a>
        </div>

        <div className="hidden md:block border-1 absolute bg-white  flex flex-col -bottom-12 rounded-lg p-6 w-9/12">
          <h1 className="text-colorfacility flex justify-center text-4xl font-bold ">
            Facilities
          </h1>
          <div className="flex justify-center ">
            <span className="text-custom m-8">
              <img className="m-4" src={KitchenLogo} /> Kitchen
            </span>
            <span className="text-custom m-8">
              <img className="m-4" src={PiscineLogo} /> Pool
            </span>
            <span className="text-custom m-8">
              <img className="m-4" src={WifiLogo} /> Wifi
            </span>
            <span className="text-custom m-8">
              <img className="m-4" src={FitnessLogo} /> Gym
            </span>
            <span className="text-custom m-8">
              <img className="m-4" src={TaxiLogo} /> Taxi
            </span>
          </div>
        </div>
      </div>
      <div className="block md:hidden border-1 bg-white  flex flex-col -bottom-12 rounded-lg p-6 w-9/12">
        <h1
          className="text-colorfacility flex justify-center text-4xl font-bold
          ml-24
        "
        >
          Facilities*
        </h1>
        <div className="flex relative justify-center flex-wrap align-center ">
          <span className="text-custom m-8 ml-28 ">
            <img className="m-4" src={KitchenLogo} /> Kitchen
          </span>
          <span className="text-custom m-8 ml-28">
            <img
              className="

            md:m-4
            xl:m-4"
              src={PiscineLogo}
            />{" "}
            Pool
          </span>
          <span className="text-custom m-8 ml-28">
            <img className="m-4" src={WifiLogo} /> Wifi
          </span>
          <span className="text-custom m-8 ml-28">
            <img className="m-4" src={FitnessLogo} /> Gym
          </span>
          <span className="text-custom m-8 ml-28">
            <img className="m-4" src={TaxiLogo} /> Taxi
          </span>
        </div>
      </div>
      <div className="hidden md:block flex-wrap justify-center mt-32">
        <h1 className="text-custom text-5xl w-full text-center mb-8">
          Rooms & Ratess
        </h1>
        <div className="w-1/2 p-2">
          <img
            className="h-[500px] w-[600px]   m-10 "
            src={Appart1}
            alt="Appart1"
          />
          <p className="font-bold text-white relative bottom-64 left-56 text-2xl">
            {" "}
            Standard Twin Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-5 text-white relative bottom-52 left-64">
            Check Rates
          </a>
        </div>
        <div className="w-1/2 p-2">
          <img
            className="h-[500px] w-[600px]  m-10 "
            src={Appart2}
            alt="Appart1"
          />
          <p className="font-bold text-white relative bottom-64 left-64 ml-2 text-2xl">
            {" "}
            Standard Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-5 text-white relative bottom-52 left-72">
            Check Rates
          </a>
        </div>
        <div className="w-1/2 p-2">
          <img
            className="h-[500px] w-[600px] m-10 "
            src={Appart1}
            alt="Appart1"
          />
          <p className="font-bold text-white relative bottom-64 left-52 text-2xl">
            {" "}
            Standard View Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-5 text-white relative bottom-52 left-64">
            Check Rates
          </a>
        </div>
        <div className="w-1/2 p-2">
          <img
            className="h-[500px] w-[600px] m-10 "
            src={Appart2}
            alt="Appart1"
          />
          <p className="font-bold text-white relative bottom-64 left-64 ml-5 text-2xl">
            {" "}
            Deluxe Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-5 text-white relative bottom-52 left-72">
            Check Rates
          </a>
        </div>
        <div>
          <p className="text-custom text-4xl m-10">Get a room already!</p>
          <a className="bg-customRgb rounded-lg p-5 text-white ml-16 flex justify-center w-8/12 ">
            Book Now
          </a>
        </div>
      </div>
      <div className="block md:hidden flex flex-wrap justify-center mt-32">
        <h1 className="text-custom text-5xl w-full text-center mb-8">
          Rooms & Rates
        </h1>
        <div className="w-1/2 p-2">
          <img className="h-auto w-auto" src={Appart1} alt="Appart1" />
          <p className="font-bold text-white relative bottom-24 ml-2 text-l">
            {" "}
            Standard Twin Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-1 text-white size-12  relative bottom-16 left-10">
            Check Rates
          </a>
        </div>
        <div className=" relative w-1/2 p-2">
          <img className="h-auto w-auto" src={Appart2} alt="Appart1" />
          <p className="font-bold text-white relative bottom-32 left-64 ml-2 text-2xl">
            {" "}
            Standard Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-1 text-white size-12 absolute bottom-16 w-auto left-8">
            Check Rates
          </a>
        </div>
        <div className="w-1/2 p-2">
          <img className="h-auto w-auto " src={Appart1} alt="Appart1" />
          <p className="font-bold text-white relative bottom-32 left-52 text-2xl">
            {" "}
            Standard View Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-2 text-white size-12 relative bottom-52 left-64">
            Check Rates
          </a>
        </div>
        <div className="w-1/2 p-2">
          <img className="h-auto w-auto " src={Appart2} alt="Appart1" />
          <p className="font-bold text-white relative bottom-16 left-64 ml-5 text-2xl">
            {" "}
            Deluxe Room{" "}
          </p>
          <a className="bg-customRgb rounded-lg p-2 size-12 text-white relative bottom-52 left-72">
            Check Rates
          </a>
        </div>
        <div>
          <p className="text-custom text-4xl m-10">Get a room already!</p>
          <a className="bg-customRgb rounded-lg p-2 text-white ml-16 flex justify-center w-8/12 ">
            Book Now
          </a>
        </div>
      </div>

      <footer className="mt-10 h-[450px] bg-black">
        <img className="ml-10 mt-10" src={logofooter}></img>
        <p className="text-white m-10">
          <strong>Bon Hotels Head Office </strong> <br /> +27 434 344 432 <br />{" "}
          info@bonhotels.com
        </p>
        <div className="flex flex-col text-center bottom-52 relative">
          <a className="text-white m-3">Our Hotels </a>
          <a className="text-white m-3">Our Conferencing</a>
          <a className="text-white m-3">Our Company </a>
          <a className="text-white m-3">Hotel Design </a>
          <a className="text-white m-3">Careers</a>
        </div>
        <div className="flex justify-end ">
          <p className="text-white relative left-64 bottom-96 text-2xl mb-15 ">
            {" "}
            Subcribe for Offers
          </p>
          <input
            className="bg-white relative bottom-80 mb-3 left-16 p-2 w-2/12 rounded-lg"
            placeholder="Email Address "
          />
          <a className="bg-customRgb rounded-lg text-white relative bottom-64 right-44 font-bold w-2/12  text-center p-1 mt-2 ">
            Subcribe Now
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
