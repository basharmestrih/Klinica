import React, { useState } from "react";
import SpecializationSelect from "./components/SpecializationSelect.jsx";
import InputField from "./components/InputField.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AppointmentHistory from "./components/AppointmentsOverview.jsx"
import { useSelector } from "react-redux";
import SectionHeader from "./components/SectionHeader.jsx";
import CircleSelector from "./components/CircleSelector.jsx";
import ActionButtons from "./components/ActionButtons.jsx";
import { useHandleSubmit } from "./hooks/useHandleSubmit.jsx";
import { useFetchAppointments } from "./hooks/useFetchAppointments.jsx";

const AppointmentPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [specialization, setSpecialization] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [selectedCircle, setSelectedCircle] = useState("doctor");
  const [appointments, setAppointments] = useState([]); // State to store appointments
  const handleSubmit = useHandleSubmit(name, specialization, date, time);
  useFetchAppointments(selectedCircle, setAppointments);


  return (
    <div className="h-auto flex bg-white">
      {/* LEFT - Image Section */}
      <div className="w-2/3 flex">
        <img
          src="/assets/rojen.jpg"
          alt="Doctor"
          className="object-cover shadow-md"
        />
      </div>

      {/* RIGHT - Content Section */}
      <div className="w-1/2 flex items-start justify-center h-screen">
        <div className="w-full h-full bg-gray-100 pl-8 pr-8 pb-5 pt-2 rounded-lg shadow-md">
          {/* Section Header */}
          <SectionHeader selectedCircle={selectedCircle} />
          {/* Three Circles Icons Row */}

          <CircleSelector
            selectedCircle={selectedCircle}
            setSelectedCircle={setSelectedCircle}
          />


        
          {/* Dynamic Content based on selected circle */}
          {selectedCircle === "doctor" ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <SpecializationSelect specialization={specialization} setSpecialization={setSpecialization} />
              <InputField label="Select Date" type="date" id="date" value={date} setValue={setDate} />
              <InputField label="Select Time" type="time" id="time" value={time} setValue={setTime} />
              <InputField label="Patient Name" type="text" id="name" value={name} setValue={setName} placeholder="Enter your name" />
              <InputField label="ID Number" type="text" id="id" value={id} setValue={setId} placeholder="Enter your ID" />
              <InputField label="Phone Number" type="text" id="id" value={id} setValue={setId} placeholder="Enter your phone number" />
            </div>

          {/* Button Row */}
          <ActionButtons isLoggedIn={isLoggedIn} />


      </form>
    ) : selectedCircle === "nearby" ? (
      <div className="text-center text-lg text-gray-500">
        <p>COMING SOON</p>
      </div>
    ) : (
      <AppointmentHistory appointments={appointments} />

   
    )}

            </div>
          </div>
        </div>
      );
    };

    export default AppointmentPage;
