import React from 'react'

const LabelGroup = ({children,name,title}) => {
  return (
    <div className=' text-primary'>
          <label className='text-start'  htmlFor={name}>{title}</label>
          {children}
    </div>
  )
}

export default LabelGroup
