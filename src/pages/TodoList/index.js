import React, {useContext} from 'react';

import {TodoThemeProvider, useTheme} from "../../context/ThemeContext";
import {Header, IconThemeContainer, MainContainer, Title, TodoContainer} from "./todoList.styled";

import IconSun from '../../assets/images/icon-sun.svg';
import IconMoon from '../../assets/images/icon-moon.svg';

export default function TodoList(props){
    const {theme, toggle} = useTheme();

    return (
        <MainContainer>

            {/*remind to use react-spring fro drag and drop reorder list*/}

            <TodoContainer>
                <Header>
                    <Title>
                        Todo
                    </Title>
                    <IconThemeContainer onClick={toggle}>
                        {
                            theme.mode === "dark"
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
    );
}