import { useState } from "react";
import "../src/App.css";
import { Doctors } from "./components/dentistDoctors";
import { Box, CardMedia, Modal, Typography } from "@mui/material";


function App() {

  const [open, setOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleOpen = (doctor) => {
    setSelectedDoctor(doctor);
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setSelectedDoctor(null);
  }

  return (
    <>

      <div className="container mx-auto min-h-screen flex flex-col">
        <img
          src="/assets/images/logo.jpg"
          className="h-10 absolute left-0 object-contain lg:my-2 lg:mx-2 md:h-8 lg:h-10"
          alt="Logo"
        />
        <header className="header my-5 p-4 flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="content">
            <h1 className="text-5xl font-bold text-text-dark mb-4">
              <span className="font-light">Get Quick</span>
              <br />
              Medical Services
            </h1>
            <p className="text-text-light mb-8 leading-7">
              In today&apos;s fast-paced world, access to prompt and efficient medical
              services is of paramount importance. When faced with a medical
              emergency or seeking immediate medical attention, the ability to
              receive quick medical services can significantly impact the outcome
              of a situation.
            </p>
            <button className="btn py-4 px-8 text-white bg-[#28bf96] rounded-lg transition duration-300 hover:bg-primary-color-dark">
              <a href="https://vital-tech.vercel.app/">Log In</a>
            </button>
          </div>
          <div className="image relative text-center isolate">
            <img src="assets/images/landingPageBg.png" alt="header image" className="relative w-full max-w-[475px] z-10" />
            <div className="image__content__1 absolute top-1/2 left-1/2 transform -translate-x-[calc(50%+12rem)] -translate-y-[calc(50%+8rem)] bg-white p-4 flex items-center gap-4 rounded-lg shadow-[5px_5px_20px_rgba(0,0,0,0.2)]">
              <span className="p-2.5 text-xl text-primary-color bg-[#defcf4] rounded-full">
                <i className="ri-user-3-line"></i>
              </span>
              <div className="details">
                <h4 className="text-xl font-semibold text-text-dark">1520+</h4>
                <p className="text-text-light">Active Clients</p>
              </div>
            </div>
            <div className="image__content__2 absolute top-1/2 left-1/2 transform -translate-x-[calc(50%-8rem)] -translate-y-[calc(50%-10rem)] bg-white p-4 rounded-lg shadow-[5px_5px_20px_rgba(0,0,0,0.2)]">
              <ul className="list-none grid gap-4">
                <li className="flex items-start gap-2 text-text-light">
                  <span className="text-xl text-primary-color">
                    <i className="ri-check-line"></i>
                  </span>
                  Get 20% off on every 1st month
                </li>
                <li className="flex items-start gap-2 text-text-light">
                  <span className="text-xl text-primary-color">
                    <i className="ri-check-line"></i>
                  </span>
                  Expert Doctors
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

      <div className="flex justify-center md:my-5">
        <span className="font-bold text-4xl px-2 md:text-6xl">Our</span><span className="font-bold text-4xl text-blue-600 md:text-6xl">Doctors</span>
      </div>
      <div className="flex justify-center">
        <p className="font-medium text-gray-500 text-center text-xl md:text-3xl">Select your doctor and Book Your Appointment in one click</p>
      </div>

      <div className="flex flex-wrap justify-center my-5 ">
        {Doctors.map((item, index) => {
          return (
            <>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow text-black">
                
                <div className="flex flex-col items-center pb-10 text-black my-5">
                  <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-contain" src={item.image} alt="Bonnie image" />
                  <h5 className="mb-1 text-xl font-medium text-gray-900">{item.name}</h5>
                  
                  <div className="flex mt-4 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Book Appointment</a>
                    
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="doctor-modal-title"
        aria-describedby="doctor-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'white',
            border: 'none',
            boxShadow: 24,
            borderRadius: 4,
            p: 4,
          }}
          className="text-center"
        >
          <Typography className="py-2 text-black" id="doctor-modal-title" variant="h6" component="h2">
            {selectedDoctor?.name}
          </Typography>
          <img src={selectedDoctor?.image} alt="doctor" className="w-full h-40 rounded-md" />
          <Typography className="font-bold text-xl py-2 text-justify text-gray-700" id="doctor-modal-description">
            {selectedDoctor?.description}
          </Typography>

          <button className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
            Book Appointment
          </button>
        </Box>
      </Modal>

    </>
  )
}

export default App
