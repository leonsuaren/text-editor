import React from 'react';
import { AiOutlineUnderline, AiOutlineBold, AiOutlineItalic } from "react-icons/ai";

import * as styled from './index';

export const Tools = () => {
  return (
    <styled.ToolsWrapper>
      <styled.ToolButtonsWrapper>
        <styled.Button>
          <AiOutlineUnderline />
        </styled.Button>
        <styled.Button>
          <AiOutlineBold />
        </styled.Button>
        <styled.Button>
          <AiOutlineItalic />
        </styled.Button>
      </styled.ToolButtonsWrapper>
    </styled.ToolsWrapper>
  )
}