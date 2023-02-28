import React from 'react';

import * as styled from './index';

export const Brand = () => {
  return (
    <styled.BrandWraper>
      <styled.BrandText>Texter</styled.BrandText>
    </styled.BrandWraper>
  )
}

export const BrandWatermark = () => {
  return (
    <styled.BrandWraperWatermark>
      <styled.BrandTextWatermark>Texter</styled.BrandTextWatermark>
    </styled.BrandWraperWatermark>
  )
}