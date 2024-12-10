import React from 'react';
import styled from 'styled-components';

const LoadingText = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="layer">Loading</div>
        <div className="layer">Loading</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    --c-1: #a2ff37;
    --c-2: #5bb2ff;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .layer {
    font-size: 25px;
    font-family: "Segoe UI", Tahoma;
    font-weight: 800;
    text-transform: uppercase;
    position: absolute;
  }

  .layer:nth-child(1) {
    color: var(--c-1);
    animation: kfs-3412 0.5s infinite;
  }

  .layer:nth-child(2) {
    color: var(--c-2);
    animation: kfs-3412 0.5s 0.25s infinite;
  }

  @keyframes kfs-3412 {
    0% {
      text-shadow: 0 0 30px var(--c-1);
      transform: scaleY(0);
      z-index: 2;
    }
    50% {
      transform: scaleY(1.5);
      z-index: 2;
    }
    100% {
      transform: scaleY(1.5);
      z-index: 0;
    }
  }`;

export default LoadingText;
