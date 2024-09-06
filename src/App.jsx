import { useState } from "react";
import "../src/App.css";
import { Doctors } from "./components/dentistDoctors";
import { Box, Modal, Typography } from "@mui/material";


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
      <div className="bg-white text-black h-full">
        <div className="container mx-auto min-h-screen flex flex-col h-full">
          <img
            src="/assets/images/logo.png"
            className="h-10 absolute left-0 object-contain lg:my-2 lg:mx-2 md:h-8 lg:h-10 bg-white"
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
              <button className="btn py-4 px-8 text-white bg-[#24ae7c] rounded-lg transition duration-300 hover:bg-primary-color-dark">
                <a href="https://vital-tech.vercel.app/">Log In</a>
              </button>
            </div>
            <div className="relative text-center isolate">
              <img src="assets/images/landingPageBg.png" alt="header image" className="relative w-full max-w-[475px] z-10" />
              <div className=" bg-white h-auto w-auto gap-4 rounded-lg my-5 shadow-[5px_5px_20px_rgba(0,0,0,0.2)]">
                <div className="relative right-5 text-black h-full w-full">
                  <h4 className=" text-black text-xl font-semibold text-text-dark">1520+</h4>
                  <p className="text-text-light">Active Clients</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div className="flex justify-center md:my-5">
          <span className="font-bold text-4xl px-2 md:text-6xl">Our</span><span className="font-bold text-4xl text-[#24ae7c] md:text-6xl">Doctors</span>
        </div>
        <div className="flex justify-center">
          <p className="font-medium text-gray-500 text-center text-xl md:text-3xl">Select your doctor and Book Your Appointment in one click</p>
        </div>

        <div className="flex flex-wrap justify-center ">
          {Doctors.map((item, index) => {
            return (
              <>
                <div className="w-full mx-1 my-1 max-w-sm bg-white border border-gray-200 rounded-lg shadow text-white" key={index}>
                  <div className="flex flex-col items-center pb-10 my-5">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg bg-white" src={item.image} alt="Bonnie image" />
                    <h5 className="mb-1 text-xl font-medium text-black">{item.name}</h5>
                    <div onClick={() => handleOpen(item)} className="flex mt-4 md:mt-6 items-center px-4 py-2 text-sm font-medium text-center text-white bg-[#24ae7c] rounded-lg focus:ring-4 focus:outline-none  cursor-pointer">
                      Read More
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
            className="text-center text-white bg-black"
          >
            <Typography className="py-2 text-black bg-white" id="doctor-modal-title" variant="h6" component="h2">
              {selectedDoctor?.name}
            </Typography>
            <img src={selectedDoctor?.image} alt="doctor" className="w-full h-40 rounded-md" />
            <Typography className="font-bold text-xl py-2 text-justify text-black bg-white" id="doctor-modal-description">
              {selectedDoctor?.description}
            </Typography>

            <button className="bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700">
              <a href="https://vital-tech.vercel.app/">Book Appointment</a>
            </button>
          </Box>
        </Modal>
      </div>

      {/* Footer starts from here! */}
      <footer className="bg-white shadow flex">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex justify-center">
            <div className="flex items-center sm:flex sm:items-center sm:justify-between">
              <img src="assets/images/logo.png" className="h-8 bg-white p-1 rounded lg:h-[150px] lg:w-[150px]" alt="Flowbite Logo" />
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="text-center">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">VitalTech</a>. All Rights Reserved.</span>
          </div>

        </div>
      </footer>

    </>
  )
}

export default App
