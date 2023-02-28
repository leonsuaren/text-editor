import React from 'react';

import * as com from '../../components';
import * as styled from './index';

export const Editor = () => {
  return (
    <styled.EditorWrapper>
      <com.EditorTools />
      <com.InputTitle />
      <h1>textarea</h1>
    </styled.EditorWrapper>
  )
}