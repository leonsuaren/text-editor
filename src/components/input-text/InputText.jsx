import React from 'react';

import * as styled from './index';

export const InputText = ({ placeholder, name, id, onChange, value, type }) => {
  return (
    <styled.Textarea placeholder={placeholder} name={name} id={id} onChange={onChange} type={type}/>
  )
}