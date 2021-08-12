import React, { useEffect, useRef, useState } from "react";

const ContactPage = () => {
  const [state, setState] = useState({
    myName: "",
    otherState: false,
  });

  const aComplexValue = () => {
    return Math.random();
  };

  const [expensive] = useState(aComplexValue());

  const myRef = useRef(null);
  console.log(expensive);

    function emailIsValid (email:string) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

  const handleChange = (e ) => {
    console.dir(e)
    const { name, value } = e.target;

    if(e){

    }
    setState((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload = encodeURI("cool stuff yes many spaces ")

    await fetch(`/api/hello?animal=${payload}`)

  };
  // prevState
  // setState((s) => ({ ...s, "myName": value }));

  // setState({"myName": value });
  //   };

  const validateField = () => {
    // if (state.myName.length < 5 || !state.myName.includes("@")) {
    //   alert("Invalid email");
    // }
  };

  //   useEffect(() => {
  //     if (state.myName.length > 5) {
  //       alert("Over 5");
  //     }
  //   }, [state]);

  //   useEffect(() => {
  //       //@ts-expect-error
  //     if ( myRef?.current?.value?.length > 4) {
  //       alert("Over 4 ref");
  //     }
  //   }, [myRef]);

  return (
    <div>
      <label>
        Email:
        <input
          aria-label="email for sign up"
          name="myName"
          // type="text"
          onChange={handleChange}
          onBlur={validateField}
          placeholder="mike"
          //   value={state.myName}
        />
      </label>
      {/* <input name="name2" type="text" 
      onChange={handleChange} 
    style={{...styles, fontSize:"50px"}}
      placeholder="mike"
    //   value={state.myName}
      /> */}
      <button
        onClick={() => {
          handleSubmit()
          console.dir(myRef.current);
          console.dir(myRef);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactPage;
