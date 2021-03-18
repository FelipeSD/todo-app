import styled from 'styled-components';
import {backgroundColor, bgImageDesktop, bgImageMobile, textColor} from "../../styles/theme";


export const MainContainer = styled.main`
    display: flex;
    min-height: 100vh;
    color: ${textColor};
    background-color: ${backgroundColor};
  
    transition: all 150ms ease-in-out;
`

export const TodoContainer = styled.section`
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem;
    z-index: 1;
  
    //BACKGROUND IMAGE
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      z-index: -1;
      
      background-position: top;
      background-repeat: no-repeat;
      background-image: 
              url(${bgImageDesktop});
    }
  
  @media(max-width: 375px){
    &:before {
      background-image:
              url(${bgImageMobile});
    }
  }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

export const IconThemeContainer = styled.div`
    cursor: pointer;
`

export const Title = styled.h1`
    text-transform: uppercase;
    letter-spacing: 1rem;
    font-family: "JosefinSans-Bold", sans-serif;
    font-weight: bolder;
    font-size: 2rem;
    color: white;
`