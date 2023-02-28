import React from 'react';

import * as styled from './index';

export const InputTitle = ({ placeholder, name, id, onChange, value, type }) => {
  return (
    <styled.Title placeholder={placeholder} name={name} id={id} onChange={onChange} type={type}/>
  )
}