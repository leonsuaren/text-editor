import React, { Fragment } from 'react';

import * as lay from '../../layout';
import * as styled from './styled';

export const Menu = () => {
  return (
    <Fragment>
      <lay.Layout>
        <styled.MenuWrapper>Menu</styled.MenuWrapper>
      </lay.Layout>
      <styled.MenuLine />
    </Fragment>
  )
}