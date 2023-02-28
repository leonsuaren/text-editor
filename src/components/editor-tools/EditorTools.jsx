import React from 'react';

import * as com from '../../components';
import * as styled from './index';

export const EditorTools = () => {
  return (
    <styled.EditorToolsWrapre>
      <com.Tools />
      <com.CreateText />
    </styled.EditorToolsWrapre>
  )
}