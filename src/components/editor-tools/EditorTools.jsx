import React from 'react';

import * as com from '../../components';
import * as styled from './index';

export const EditorTools = ({ handleOnBoldStyled }) => {
  return (
    <styled.EditorToolsWrapre>
      <com.Tools handleOnBoldStyled={handleOnBoldStyled}/>
      <com.CreateText />
    </styled.EditorToolsWrapre>
  )
}