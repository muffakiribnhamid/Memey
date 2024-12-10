import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="loader" />
      </div>
    </StyledWrapper>
  );
}




const StyledWrapper = styled.div`
  .loader {
    width: 20%;
    height: 10px;
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
  }

  .loader::before {
    content: "";
    position: absolute;
    background-color: rgb(9, 188, 9);
    width: 0%;
    height: 100%;
    border-radius: 2px;
    animation: load 3.5s ease-in-out infinite;
    box-shadow: rgb(9, 188, 9) 0px 2px 29px 0px;
  }

  .container {
    display: flex;
    justify-content: center;
  }

  @keyframes load {
    50% {
      width: 100%;
    }

    100% {
      right: 0;
      left: unset;
    }
  }`;

export default Loader;
