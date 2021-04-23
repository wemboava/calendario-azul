import styled from 'styled-components';

interface IModal {
  isActivity: boolean
}

const Modal = styled.div<IModal>`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 105;
  display: flex;
  transition: visibility .1s linear, opacity .2s ease;
  visibility: ${props => props.isActivity ? 'visible' : 'hidden'};
  opacity: ${props => props.isActivity ? '1' : '0'};
  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.7);
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 45px;
    & > span {
      margin-top: 10px;
      margin-right: 40px;
      color: #0081c8;
    }
  }
  svg {
  width: 200px;
  }
  .cls-1 {
    stroke-width: 2;
    stroke: #00bed7;

    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  .cls-2 {
    stroke-width: 2;
    stroke: #0081c8;

    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
     /* animation: dash2 1s linear alternate infinite; */
  }
  .cls-3 {
      stroke-width: 2;
      stroke: #0081c8;

      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
      /* animation: dash 4s linear alternate infinite; */
  }
  .cls-1 {
    fill: #00bed7;
  }

  .cls-2 {
    fill: #0081c8;
  }
  .cls-3 {
    fill: #0081c8;
  }
  .row1 path {
    animation: dash2 .8s linear alternate infinite;
  }
  .row2 path {
    animation: dash2 .8s linear alternate .1s infinite;
  }
  .row3 path {
    animation: dash2 .8s linear alternate .3s infinite;
  }
  .row4 path {
    animation: dash2 .8s linear alternate .5s infinite;
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    50% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 1000;
    }
  }
  @keyframes dash1 {
    from {
      fill: #fff;
    }
    to {
      fill: #00bed7;
    }
  }
  @keyframes dash2 {
    0% {
      opacity: 0;
    }
    20% {
      /* fill: #0081c8; */
      opacity: 1;
    }
    100% {
      /* fill: #0081c8; */
      opacity: 1;
    }
  }
`;

export { Modal, ModalContent };
