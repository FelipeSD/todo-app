import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import {Form} from "./todoForm.styled";
export default function TodoForm(props){
    // const themeContext = useContext(ThemeContext);

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return(
        <Form theme={} onSubmit={e => handleSubmit(e)}>

        </Form>
    );
}