import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import React from 'react'
import Reusable from './Reusable';
const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]


const Inputgroup = ({ field, onChangeCb, formData }) => {

    return (
        <Reusable name={field.name} title={field.title}>
            {field.type === 'date' ? <Calendar className='w-100' onChange={onChangeCb} name={field.name} value={formData?.[field.name]} placeholder={field.placeholder} /> : null}
            {['text', 'password', 'email']?.includes(field.type) ? <InputText type={field.type} onChange={onChangeCb} name={field.name} value={formData?.[field.name] ?? ""} placeholder={field.placeholder} className="w-100" /> : null}
            {field.type === 'dropdown' ? <Dropdown options={cities} optionLabel="name"
                placeholder={field.placeholder} className="w-100" onChange={onChangeCb} name={field.name} value={formData?.[field.name]} /> : null}
        </Reusable>
    )
}

    export default Inputgroup
