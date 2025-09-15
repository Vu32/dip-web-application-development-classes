import React from "react";

   function DateInputComponent() {
     const inputStyle = {
        margin: "5px",
        padding: "8px",
        border: "1px, solid #ccc",
        borderRadius: "4px",
      };

       const handleChange = (event) => {
        const newDate = event.target.value;
        debugger;
      };

        return (
          <input className="input"
           type="date" 
          style={inputStyle} 
          value={newDate} 
         onChange={handleChange}/>

      );
      }