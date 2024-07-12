import React from 'react'

const LabelGroup = ({children,name,title,required}) => {
  return (
    <div className=' text-primary'>
      <label className='text-start' htmlFor={name}>{title} {required ? <span className='text-danger'>*</span> :null }</label>
          {children}
    </div>
  )
}

export default LabelGroup
