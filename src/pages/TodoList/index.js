import React, {useState, useEffect} from 'react';

import {ThemeProvider} from "styled-components";
import {Header, IconThemeContainer, MainContainer, Title, TodoContainer} from "./todoList.styled";

import theme from '../../styles/theme';

import IconSun from '../../assets/images/icon-sun.svg';
import IconMoon from '../../assets/images/icon-moon.svg';

export default function TodoList(){
    const [currentTheme, setCurrentTheme] = useState(theme.dark);

    const handleThemeChange = ()=>{
        if(currentTheme.name === "dark" ){
            setCurrentTheme(theme.light);
        }else{
            setCurrentTheme(theme.dark);
        }
    }

    return (
        <ThemeProvider theme={currentTheme}>
            <MainContainer>

                {/*remind to use react-spring fro drag and drop reorder list*/}

                <TodoContainer>
                    <Header>
                        <Title>
                            Todo
                        </Title>
                        <IconThemeContainer onClick={handleThemeChange}>
                            {
                                currentTheme.name === "dark"
                                    ? <img src={IconSun} alt={"Light theme"}/>
                                    : <img src={IconMoon} alt={"Dark theme"}/>
                            }
                        </IconThemeContainer>
                    </Header>

                    items left

                    All
                    Active
                    Completed

                    Clear Completed

                    Drag and drop to reorder list

                    <div className="attribution">
                        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                        Coded by <a href="#">Your Name Here</a>.
                    </div>
                </TodoContainer>

            </MainContainer>
        </ThemeProvider>
    );
}