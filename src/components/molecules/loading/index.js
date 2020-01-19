import React from 'react';

import {
  WrapperLoading,
} from './styles';

function Loading() {
  return (
    <WrapperLoading>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </WrapperLoading>
  )
}

export default Loading;