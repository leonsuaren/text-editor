import React from 'react';

import * as styled from './index';

export const CreateText = () => {
  return (
    <styled.CreateTextWrapper>
      <styled.CreateTextPlusButton type='submit' form='text-editor'>
        <styled.CreateTextPlus />
      </styled.CreateTextPlusButton>
    </styled.CreateTextWrapper>
  )
}