// import React, { useState } from "react";
// import { firestore } from "../firebase";
// import { FaUser, FaTrashAlt } from 'react-icons/fa';
// import "./Footprint.css";

// const Footprint = () => {
//   const [familyMembers, setFamilyMembers] = useState([]);
//   const [memberName, setMemberName] = useState("");
//   const [memberGender, setMemberGender] = useState("");
//   const [memberAge, setMemberAge] = useState("");
//   const [dietaryHabits, setDietaryHabits] = useState("");
//   const [appliances, setAppliances] = useState([]);
//   const [applianceName, setApplianceName] = useState("");
//   const [outletsCount, setOutletsCount] = useState(0);
//   const [gardenWateringFreq, setGardenWateringFreq] = useState("");
//   const [vehicleWashFreq, setVehicleWashFreq] = useState("");

//   const addMember = () => {
//     const newMember = {
//       name: memberName,
//       gender: memberGender,
//       age: memberAge
//     };
//     setFamilyMembers([...familyMembers, newMember]);
//     setMemberName("");
//     setMemberGender("");
//     setMemberAge("");
//   };

//   const addAppliance = () => {
//     setAppliances([...appliances, applianceName]);
//     setApplianceName("");
//   };

//   const saveFormData = () => {
//     const formData = {
//       familyMembers,
//       dietaryHabits,
//       appliances,
//       outletsCount,
//       gardenWateringFreq,
//       vehicleWashFreq
//     };
//     firestore.collection("footprintData").add(formData);
//   };

//   const removeMember = (index) => {
//     const updatedMembers = [...familyMembers];
//     updatedMembers.splice(index, 1);
//     setFamilyMembers(updatedMembers);
//   };

//   return (
//     <>
//   <div className="background-container">

//     <br/>
//      <h2 className="title">Your Water Footprint</h2>
// <br/>
//     <div className="footprint-container">
//       <div className="form-section">
//         <h3 className="section-title">Family Members Information</h3>
//         <div className="input-group">
//           <input
//             type="text"
//             placeholder="Name"
//             value={memberName}
//             onChange={(e) => setMemberName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Gender"
//             value={memberGender}
//             onChange={(e) => setMemberGender(e.target.value)}
//           />
//           <input
//             type="number"
//             placeholder="Age"
//             value={memberAge}
//             onChange={(e) => setMemberAge(e.target.value)}
//           />
//           <button className="btn-add-member" onClick={addMember}>
//             <FaUser /> Add Member
//           </button>
//         </div>
        
//         <div className="added-members">
//           {familyMembers.map((member, index) => (
//             <div key={index} className="member">
//               <p>Name: {member.name}</p>
//               <p>Gender: {member.gender}</p>
//               <p>Age: {member.age}</p>
//               <button onClick={() => removeMember(index)}>
//                 <FaTrashAlt /> Remove
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <div className="form-section">
//         <h5 className="section-title">Dietary Habits</h5>
//         <select
//           className="select-input"
//           value={dietaryHabits}
//           onChange={(e) => setDietaryHabits(e.target.value)}
//         >
//           <option value="">Select</option>
//           <option value="vegetarian">Vegetarian</option>
//           <option value="vegan">Vegan</option>
//           <option value="avgMeatConsumer">Avg Meat Consumer</option>
//           <option value="highMeatConsumer">High Meat Consumer</option>
//         </select>
//       </div>


      // <div className="form-section">
      //   <h5>Appliances That Use Water</h5>
      //   <div className="input-group">
      //     <input
      //       type="text"
      //       placeholder="Appliance Name"
      //       value={applianceName}
      //       onChange={(e) => setApplianceName(e.target.value)}
      //     />
      //     <button className="btn-add-appliance" onClick={addAppliance}>
      //       Add Appliance
      //     </button>
      //   </div>
      //   <ul className="appliance-list">
      //     {appliances.map((appliance, index) => (
      //       <li key={index}>{appliance}</li>
      //     ))}
      //   </ul>
      // </div>
      // <div className="form-section">
      //   <h5>Number of Water Outlets</h5>
      //   <input
      //     type="number"
      //     className="input-field"
      //     value={outletsCount}
      //     onChange={(e) => setOutletsCount(e.target.value)}
      //   />
      // </div>
      // <div className="form-section">
      //   <h5>Frequency of Watering Garden</h5>
      //   <input
      //     type="text"
      //     className="input-field"
      //     value={gardenWateringFreq}
      //     onChange={(e) => setGardenWateringFreq(e.target.value)}
      //   />
      // </div>
      // <div className="form-section">
      //   <h5>Frequency of Washing Vehicle</h5>
      //   <input
      //     type="text"
      //     className="input-field"
      //     value={vehicleWashFreq}
      //     onChange={(e) => setVehicleWashFreq(e.target.value)}
      //   />
      // </div>
//       <button className="save-btn" onClick={saveFormData}>
//         Save
//       </button>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Footprint;


import React, { useState } from "react";
import { firestore } from "../firebase";
import { FaUser, FaTrashAlt } from 'react-icons/fa';
import { AiOutlineAlert } from 'react-icons/ai';
import "./Footprint.css";
import wf from './wf.jpg'

const Footprint = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [memberName, setMemberName] = useState("");
  const [memberGender, setMemberGender] = useState("");
  const [memberAge, setMemberAge] = useState("");
  const [dietaryHabits, setDietaryHabits] = useState("");
  const [appliances, setAppliances] = useState([]);
  const [applianceName, setApplianceName] = useState("");
  const [outletsCount, setOutletsCount] = useState(0);
  const [gardenWateringFreq, setGardenWateringFreq] = useState("");
  const [vehicleWashFreq, setVehicleWashFreq] = useState("");
  const [showAllocation, setShowAllocation] = useState(false);
  const [allocatedWater, setAllocatedWater] = useState({
    regular: 0,
    surplus: 0,
    emergency: 0
  });
  const [showForm, setShowForm] = useState(true);
  const [waterFootprint, setWaterFootprint] = useState(0);

  const addMember = () => {
    const newMember = {
      name: memberName,
      gender: memberGender,
      age: memberAge
    };
    setFamilyMembers([...familyMembers, newMember]);
    setMemberName("");
    setMemberGender("");
    setMemberAge("");
  };

  const addAppliance = () => {
    setAppliances([...appliances, applianceName]);
    setApplianceName("");
  };

  const saveFormData = () => {
    const formData = {
      familyMembers,
      dietaryHabits,
      appliances,
      outletsCount,
      gardenWateringFreq,
      vehicleWashFreq
    };
    firestore.collection("footprintData").add(formData);

    // Calculate water footprint
    const footprint = calculateWaterFootprint();
    setWaterFootprint(footprint);

    // Allocate water based on different modes
    const allocated = allocateWater(footprint);
    setAllocatedWater(allocated);

    setShowAllocation(true);
    setShowForm(false);
  };

  const removeMember = (index) => {
    const updatedMembers = [...familyMembers];
    updatedMembers.splice(index, 1);
    setFamilyMembers(updatedMembers);
  };

  const calculateWaterFootprint = () => {
    const familySize = familyMembers.length;

    // Dietary habits factor
    let dietaryFactor = 0;
    switch (dietaryHabits) {
      case 'vegetarian':
        dietaryFactor = 100; // Liters per day per person for vegetarian diet
        break;
      case 'vegan':
        dietaryFactor = 80; 
        break;
      case 'avgMeatConsumer':
        dietaryFactor = 150; 
        break;
      case 'highMeatConsumer':
        dietaryFactor = 200; 
        break;
      default:
        dietaryFactor = 120; 
    }

    // Appliance factor
    const applianceFactor = appliances.length * 50; // Assume 50 liters per day per appliance

    // Outdoor activities factor
    const gardenWateringFactor = gardenWateringFreq === 'daily' ? 100 : 50; // Liters per day for garden watering
    const vehicleWashFactor = vehicleWashFreq === 'daily' ? 150 : 100; // Liters per day for vehicle washing

    // Calculate total water footprint
    const totalWaterFootprint = (familySize * dietaryFactor) + applianceFactor + (gardenWateringFactor * familySize) + (vehicleWashFactor * familySize);

    return totalWaterFootprint;
  };

  const allocateWater = (waterFootprint) => {
    // Allocate water based on different modes
    const regularModeAllocation = waterFootprint * 0.8;
    const surplusModeAllocation = regularModeAllocation+ 20;
    const emergencyModeAllocation = regularModeAllocation+ 50;

    // Choose allocation based on conditions
    let allocatedWater = {
      regular: 0,
      surplus: 0,
      emergency: 0
    };
    if (waterFootprint <= 500) {
      allocatedWater = {
        regular: regularModeAllocation,
        surplus: 0,
        emergency: 0
      };
    } else if (waterFootprint > 500 && waterFootprint <= 1000) {
      allocatedWater = {
        regular: 0,
        surplus: surplusModeAllocation,
        emergency: 0
      };
    } else {
      allocatedWater = {
        regular: 0,
        surplus: 0,
        emergency: emergencyModeAllocation
      };
    }

    return allocatedWater;
  };

  return (
    <div className="background-container">
      <br />
      <h2 className="title">Your Water Footprint</h2>
      <br />
      {showForm && (
        <div className="footprint-container">
          <div className="form-section">
            <h3 className="section-title">Family Members Information</h3>
            <div className="input-group">
              <input
                type="text"
                placeholder="Name"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Gender"
                value={memberGender}
                onChange={(e) => setMemberGender(e.target.value)}
              />
              <input
                type="number"
                placeholder="Age"
                value={memberAge}
                onChange={(e) => setMemberAge(e.target.value)}
              />
              <button className="btn-add-member" onClick={addMember}>
                <FaUser /> Add Member
              </button>
            </div>
            <div className="added-members">
              {familyMembers.map((member, index) => (
                <div key={index} className="member">
                  <p>Name: {member.name}</p>
                  <p>Gender: {member.gender}</p>
                  <p>Age: {member.age}</p>
                  <button onClick={() => removeMember(index)}>
                    <FaTrashAlt /> Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-section">
            <h5 className="section-title">Dietary Habits</h5>
            <select
              className="select-input"
              value={dietaryHabits}
              onChange={(e) => setDietaryHabits(e.target.value)}
            >
              <option value="">Select</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="avgMeatConsumer">Avg Meat Consumer</option>
              <option value="highMeatConsumer">High Meat Consumer</option>
            </select>
          </div>

          <div className="form-section">
            <h5>Appliances That Use Water</h5>
            <div className="input-group">
              <input
                type="text"
                placeholder="Appliance Name"
                value={applianceName}
                onChange={(e) => setApplianceName(e.target.value)}
              />
              <button className="btn-add-appliance" onClick={addAppliance}>
                Add Appliance
              </button>
            </div>
            <ul className="appliance-list">
              {appliances.map((appliance, index) => (
                <li key={index}>{appliance}</li>
              ))}
            </ul>
          </div>

          <div className="form-section">
            <h5>Number of Water Outlets</h5>
            <input
              type="number"
              className="input-field"
              value={outletsCount}
              onChange={(e) => setOutletsCount(e.target.value)}
            />
          </div>

          <div className="form-section">
            <h5>Frequency of Watering Garden</h5>
            <input
              type="text"
              className="input-field"
              value={gardenWateringFreq}
              onChange={(e) => setGardenWateringFreq(e.target.value)}
            />
          </div>

          <div className="form-section">
            <h5>Frequency of Washing Vehicle</h5>
            <input
              type="text"
              className="input-field"
              value={vehicleWashFreq}
              onChange={(e) => setVehicleWashFreq(e.target.value)}
            />
          </div>

          <button className="save-btn" onClick={saveFormData}>
            Save
          </button>
        </div>
      )}

{/* {showAllocation && (
  <div className="allocation-container">
    
    <div className="header">
      <img src={wf} alt="Water Icon" className="water-icon" style={{width: '300px'}} />
      <h3 className="allocation-title">Allocated Water Footprint</h3>
    </div>
    <hr/>
    <div className="water-amount">
      <p>Total Water Footprint: {waterFootprint.toFixed(2)} Liters</p><br/>
      <p><b>Allocated Water</b></p>
      <ul>
        <li>Regular Mode: {allocatedWater.regular.toFixed(2)} Liters</li>
        <li>Surplus Mode: {allocatedWater.surplus.toFixed(2)} Liters</li>
        <li>Emergency Mode: {allocatedWater.emergency.toFixed(2)} Liters</li>
      </ul>
    </div>
  </div>
)} */}

     {showAllocation && (
  <div className="allocation-container">
    <div className="left-half">
     <img src={wf} alt="Water Icon" className="water-icon" />
    </div>
    <div className="right-half">
      <div className="header">
        <h3 className="allocation-title">Allocated Water Footprint</h3>
      </div>
      <hr/>
      <div className="water-amount">
        <p>Total Water Footprint: {waterFootprint.toFixed(2)} Liters</p><br/>
        <p><b>Allocated Water</b></p>
        <ul>
          <li>Regular Mode: {allocatedWater.regular.toFixed(2)} Liters</li>
          <li>Surplus Mode: {allocatedWater.regular.toFixed(2) +20} Liters</li>
          <li>Emergency Mode: {allocatedWater.emergency.toFixed(2)} Liters</li>
        </ul>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Footprint;

