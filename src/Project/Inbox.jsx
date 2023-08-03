// import React, { useState } from "react";
// import "./style.css";

// const Inbox = () => {
//   const [inputData, setInputData] = useState("");
//   const [previousData, setPreviousData] = useState([]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputData(value);
//   };

//   const handlePreviousSubmit = () => {
//     if (inputData !== "") {
//       setPreviousData((prevData) => [...prevData, inputData]);
//       setInputData("");
//     }
//   };

//   return (
//     <div>
//       <div className="inbox1">
//         <br />
//         <h1>Inbox</h1>
//         <button onClick={handlePreviousSubmit}>Submit</button>
//         {previousData.map((data, index) => (
//           <div key={index}>{data}</div>
//         ))}
//       </div>
//       <div className="inbox2">
//         <input
//           type="text"
//           name=""
//           id=""
//           value={inputData}
//           onChange={handleInputChange}
//           className="step6int"
//         />
//       </div>
//     </div>
//   );
// };

// export default Inbox;
import React, { useState, useEffect } from "react";
import "./style.css";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleCheckboxChange = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleToggleDropdown}>@</button>
      {isOpen && (
        <div style={{ border: "1px solid black", padding: "10px", display: "block"}}>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1">{localStorage.getItem("DataOfStepFourp3")}</label>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
          <label htmlFor="vehicle2">{localStorage.getItem("DataOfStepFourp4")}</label>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
          <label htmlFor="vehicle3">{localStorage.getItem("DataOfStepFourp5")}</label>
        </div>
      )}
    </div>
  );
};

const Inbox = () => {
  const [styles, setStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const [inputData, setInputData] = useState("");
  const [previousData, setPreviousData] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputData(value);
  };

  const handlePreviousSubmit = () => {
    if (inputData !== "") {
      setPreviousData((prevData) => [...prevData, inputData]);
      setInputData("");
    }
  };

  const handleToggleStyle = (style) => {
    setStyles((prevStyles) => ({
      ...prevStyles,
      [style]: !prevStyles[style],
    }));
  };

  useEffect(() => {
    const savedData = localStorage.getItem("inputData");
    if (savedData) {
      setInputData(savedData);
    }
    const savedStyles = JSON.parse(localStorage.getItem("styles"));
    if (savedStyles) {
      setStyles(savedStyles);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("inputData", inputData);
  }, [inputData]);

  useEffect(() => {
    localStorage.setItem("styles", JSON.stringify(styles));
  }, [styles]);

  return (
    <div>
      <div className="inbox1">
        <br />
        <h1>Inbox</h1>
        
        {previousData.map((data, index) => (
          <div key={index}>{data}</div>
        ))}
      </div>
      <div className="inbox2">
         <Dropdown style={{color:"black"}} />
         <div>
         
          <button onClick={() => handleToggleStyle("bold")} className={styles.bold ? "button active" : "button"} >
            <b>B</b>
          </button>
          <button onClick={() => handleToggleStyle("italic")} className={styles.italic ? "button active" : "button"} style={{margin: "2px"}}>
            <em>I</em>
          </button>
          <button  onClick={() => handleToggleStyle("underline")} className={styles.underline ? "button active" : "button"} style={{margin: "0"}}>
            <u>U</u>
          </button>
          <p
            style={{
              fontWeight: styles.bold ? "bold" : "normal",
              fontStyle: styles.italic ? "italic" : "normal",
              textDecoration: styles.underline ? "underline" : "none",
            }}
          >
            {inputData}
          </p>
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your Message"
            value={inputData}
            onChange={handleInputChange}
            className="step6int"
          />
          <button onClick={handlePreviousSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
