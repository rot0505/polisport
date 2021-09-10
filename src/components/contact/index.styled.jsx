import styled from 'styled-components'

const filledColor = 'rgba(255,255,255,.7)';
const inputColor = '#929292';
const borderColor = '#434343'
const inputFocusColor = '#929292';
const inputPlaceholderColor = '#929292';
const inputPlaceholderFocusColor = '#cfcfcf';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 130px);
  display: flex;
  align-items: center;

  #file-name{
    color: #434343;
  }

  .container {
    margin-top: 10px;

    .main-text {
      @media (max-width: 767px) {
        padding: 0 15px;
        margin-bottom: 10px;
      }
      @media (min-width: 768px) and (max-height: 700px){
        font-size: 30px;
      }
    }

    input[type='file'] {
      display: none
    }

    .input-wrapper {
      height: 28px;
      border: solid 1px #434343;
      display: flex;
      align-items: center;
      padding: 0 10px;

      @media (min-width: 768px) {
        height: 42px;
      }
    }

    .input-wrapper label {
      background-color: #929292;
      color: #151515;
      padding: 0px 10px;
      margin: 0 20px 0 0;
      transition: all .3s ease;
      font-size: 12px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }

    .input-wrapper label:hover {
      background-color: #bdbdbd;
      cursor: pointer;
    }

    .inputs-margin {
      margin-top: 16px;

      @media (min-width: 768px) {
        margin-top: 22px;
      }

      @media (min-width: 768px) and (max-height: 700px){
        margin-top: 14px;
      }
    }
    .overflow-scroll {
      padding-right: 15px;
      padding-left: 15px;
      overflow-y: auto;
      overflow-x: hidden;
      height: 100%;
      max-height: calc(100vh - 260px);
      scroll-behavior: smooth;

      @media (min-width: 768px) {
        padding-right: 0;
        padding-left: 0;
        max-height: initial;
        margin-top: 40px;
      }

      @media (min-width: 768px) and (max-height: 700px){
        margin-top: 0px;
      }
    }
  }
`

export const InputText = styled.input`
  width: 100%;
  height: 28px;
  border: none;
  outline: none;
  font-size: 12px;
  border: solid 1px ${borderColor};
  color: ${inputColor};
  letter-spacing: 1.28px;
  transition: all .3s linear;
  padding: 0 10px;
  background: transparent;

  @media (min-width: 768px) {
    height: 36px;
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-height: 700px){
    height: 36px;
    font-size: 16px;
  }
  
  &:focus {
    border: solid 1px ${inputFocusColor};
    color: ${inputFocusColor};

    &::placeholder {
      color: ${inputPlaceholderFocusColor};
    }
  }

  &.filled {
    color: ${filledColor};
    border: solid 1px ${filledColor};

    &:focus {
      border: solid 1px ${inputFocusColor};
      color: ${inputFocusColor};
    }
  }

  &::placeholder {
    color: ${inputPlaceholderColor};
    transition: all .3s linear;
  }
`

export const EnterTour = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 40px;
  border-bottom: solid 1px rgba(255,255,255, .3); 
  left: 0;
  opacity: 1;
  bottom: -10px;
  transition: all .4s ease 1s;

  .container {
    opacity: 1;
    transition: .3s all ease;
  }

  &.disabled {
    pointer-events: none;

    .container {
      opacity: .3;
    }
  }

  @media (min-width: 768px) {
    bottom: 20px;
  }

  @media (min-width: 768px) and (max-height: 700px){
    bottom: -10px;
  }

  &.leaving {
    opacity: 0;
  }

  &:hover {
    .text-container {
      opacity: .5;
    }

    .bike-container {
      svg {
        transform: rotate(-15deg);
      }
    }
  }
`

export const TextContainer = styled.div`
  width: auto;
  opacity: 1;
  transition: all .3s ease;
  cursor: pointer;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 4px 10px;
  height: 100%;
  min-height: 150px;
  max-height: 150px;
  font-size: 12px;
  border: none;
  outline: none;
  border: solid 1px ${borderColor};
  color: ${inputColor};
  resize: none;
  letter-spacing: 1.28px;
  transition: all .3s linear;
  background: transparent;
  

  @media (min-width: 768px) {
    min-height: 100px;
    max-height: 100px;
    font-size: 16px;
  }

  @media (min-width: 768px) and (max-height: 700px){
    min-height: 70px;
    max-height: 70px;
    font-size: 16px;
  }
  
  &:focus {
    border: solid 1px ${inputFocusColor};
    color: ${inputFocusColor};
    &::placeholder {
      color: ${inputPlaceholderFocusColor};
    }
  }

  &.filled {
    color: ${filledColor};
    border: solid 1px ${filledColor};
  }

  &::placeholder {
    color: ${inputPlaceholderColor};
    transition: all .3s linear;
  }
`

export const BikeContainer = styled.div`
  width: 34px;
  position: absolute;
  height: 30px;
  cursor: pointer;
  transform: ${p => p.distance ? `translateX(${p.distance}px)`: `translateX(100px)`};

  &.leaving {
    transition: all 1.5s ease-in;
    transform: translateX(100vw);
    width: 100px;

    svg {
      transform: rotate(0deg) !important;
    }
  }

  svg {
    position: absolute;
    right: 10px;
    top: 10px;

    transform-origin: 20% 40%;
    transform: rotate(0deg);
    transition: all .3s ease;
  }

  &:after {
    content: '';
    position: absolute;
    width: inherit;
    height: 2px;
    background: #FFF;
    bottom: -2px;
    right: 0;
  }
`

export const CheckLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  cursor: pointer;
  font-size: 14px;
  color: #434343;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: all .3s linear;

  &.filled {
    color: ${filledColor};
  }
`

export const InputCheckBox = styled.div`
  position: relative;
  margin-right: 10px;
  width: 14px;
  height: 14px;
  outline: none;
  border: solid 1px #929292;
  background: #000000;
  letter-spacing: 1.28px;

  @media (min-width: 768px) {
    width: 10px;
    height: 10px;
  }  

  &.checked {
    &:after {
      content: '';
      position: absolute;
      width: 70%;
      height: 70%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 1.5px;
      background: #929292;
    }
  }
`
