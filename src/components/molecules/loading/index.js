import React from 'react';

import {
  WrapperLoading,
} from './styles';

function Loading() {
  return (
    <WrapperLoading>
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
    </WrapperLoading>
  )
}

export default Loading;