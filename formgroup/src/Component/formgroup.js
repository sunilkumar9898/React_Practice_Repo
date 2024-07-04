import React from 'react'

const Formgroup = ({children,name,title}) => {
  return (
    <div>
      <div className='py-2 d-flex align-items-center'>
        <label style={{ width: "200px" }} htmlFor={name} >{title}  </label>
        {children}
      </div>
    </div>
  )
}

export default Formgroup
