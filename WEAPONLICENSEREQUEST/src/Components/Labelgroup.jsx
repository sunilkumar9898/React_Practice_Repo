import React from 'react'

const Labelgroup = ({children,name, title, required}) => {
  return (
      <div>
          <div className="d-flex p-3 ">
              <label
                  className="bg-info px-2 mx-3"
                  style={{ width: "180px" }}
                  htmlFor={name}>
                  {title}
                  {required ? <span className="text-danger h4 ">*</span> : null}
              </label>
              {children}
          </div>
      </div>
  );
}

export default Labelgroup
