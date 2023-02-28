import React from 'react';

import * as com from '../../components';
import * as styled from './index';

export const Editor = () => {
  return (
    <styled.EditorWrapper>
      <com.EditorTools />
      <h1>title</h1>
      <h1>textarea</h1>
    </styled.EditorWrapper>
  )
}