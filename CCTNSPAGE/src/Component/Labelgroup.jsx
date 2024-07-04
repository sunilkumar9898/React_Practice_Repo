import React from 'react'

const Labelgroup = ({children,name,title}) => {
  return (
      <div>
          <div className="py-2 d-flex align-items-center  ">
              <label className='label_name mx-2' style={{ width: "200px" }} htmlFor={name}>
                  {title}
              </label>
              {children}
          </div>
      </div>
  );
}

export default Labelgroup
