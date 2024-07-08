import React, { useState } from 'react'
import Inputgroup from './Inputgroup';
import Formgroup from './formgroup';


const intialvalue = {
    username: "",
    password: "",
    dob: "",
    city: ""
}

const formFields = [
    { name: 'username', title: 'Username', type: 'text', placeholder: 'Username' },
    { name: 'password', title: 'Password', type: 'password', placeholder: 'Password' },
    { name: 'dob', title: 'DOB', placeholder: 'DOB', type: "date" },
    { name: 'city', title: 'City', placeholder: 'Select a City', optionLabel: 'name', type: "dropdown" },
];


const Form = () => {
    const [value1, setValue] = useState(intialvalue);
    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValue((pre) => ({
            ...pre, [name]: value
        }))

    }
    console.log(value1);

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value1.username === "" || value1.email === "" || value1.password === "" || value1.city === "") {
        alert("please enter all dields")
            return
        }

        else {
            setData((prev) => [...prev, value1])
            setValue(intialvalue)
        alert("success")
        }

        // console.log(data);
    }


  return (
    <div>
          <div>

              <div className='rounded-4 shadow-lg px-5 py-4  main_div mx-auto mt-5'>
                  <h1 className='text-center py-1 text-primary  '>Registration Form  </h1>
                  <div className="d-flex flex-column  text-left  textSize ">
                      {formFields?.map(field => <Inputgroup field={field} onChangeCb={handleChange} formData={value1} />)}

                      <Formgroup>
                          <button onClick={handleSubmit} type="button" className="w-100 btn btn-success">Success</button>
                      </Formgroup>
                  </div>
              </div>

          </div>
          <div className="container d-flex p-2 mt-5 flex-wrap mx-auto justify-content-center ">
              {data.map((ele, idx) => {
                  return (
                      <div key={idx} className='text-left border p-4 mx-2  my-2 rounded-3 shadow-lg'>
                          <p>Username : {ele.username}</p>
                          <p>password:{ele.password} </p>
                          <p>DOB : {`${ele.dob}`}</p>
                          <p>City :  {ele.city?.name ?? ""}</p>
                      </div>
                  )
              })}
          </div>
    </div>
  )
}

export default Form
