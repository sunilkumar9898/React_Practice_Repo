import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import React from 'react'
import Formgroup from './formgroup';
const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]


const Inputgroup = ({ field, onChangeCb, formData }) => {

  return (
    <Formgroup name={field.name} title={field.title}>
      {["text", "email", "password"]?.includes(field.type) ? <InputText type={field.type} name={field.name} onChange={onChangeCb} value={formData?.[field.name] ?? ""} placeholder={field.placeholder} className='w-100' /> : null}
      {field.type === "date" ? <Calendar type={field.type} name={field.name} onChange={onChangeCb} value={formData?.[field.name] ?? ""} placeholder={field.placeholder} className='w-100' /> : null}
      {field.type === "dropdown" ? <Dropdown options={cities} optionLabel="name" type={field.type} name={field.name} onChange={onChangeCb} value={formData?.[field.name] ?? ""} placeholder={field.placeholder} className='w-100' /> : null }

    </Formgroup>
  )
}

export default Inputgroup
