import styled from 'styled-components';

export const Form = styled.form`
    background-color: ${props => props.theme.name === "dark" ? props.theme.veryDarkBlue : props.theme.veryLightGray};
`