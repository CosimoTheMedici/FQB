import React from 'react'
import {  Form } from "react-bootstrap";


const Select = ({
    arrayData,
    defaultSelectText,
    onChange,
    value,
    name,
  }) => {
  return (
    <Form.Select
    className=" form-select-mb mb-3"
    aria-label=".form-select-mb example"
    name={name}
    type="select"
    onChange={onChange}
    value={value}
  >
    <option>
            {defaultSelectText
              ? `---------${defaultSelectText}--------`
              : "----------Select---------"}
          </option>
          {arrayData.map((data, index) => (
            <option key={index} value={data.value || data.label}>
              {data.label}
            </option>
            ))}
  </Form.Select>
  )
}

export default Select