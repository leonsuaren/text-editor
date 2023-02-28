import React, { Fragment } from 'react';

import * as lay from '../../layout';
import * as com from '../../components';
import * as styled from './styled';

export const Menu = () => {
  return (
    <Fragment>
      <lay.Layout>
        <styled.MenuWrapper>
          <com.Brand/>
          <div />
        </styled.MenuWrapper>
      </lay.Layout>
      <styled.MenuLine />
    </Fragment>
  )
}