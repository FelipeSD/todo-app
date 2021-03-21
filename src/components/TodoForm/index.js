import {
    FilterOptions,
    InputText,
    ItemGroup,
    ListContainer,
    ListFooter,
    SmallButton,
    Text
} from './todoForm.styled';
import React from "react";

export default function TodoForm(props){
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <form onSubmit={e => handleSubmit(e)} method="POST">
                <ItemGroup className={"individual"}>
                    <input type={"checkbox"} disabled />
                    <InputText
                        type={"text"}
                        name={"todoItem"}
                        placeholder={"Create a new todo..."}
                    />
                </ItemGroup>
            </form>

            <ListContainer>
                <ItemGroup className={"list-item"}>
                    <input type={"checkbox"} disabled />
                    <Text>
                        Complete online Javascript course
                    </Text>
                </ItemGroup>
                <ItemGroup className={"list-item"}>
                    <input type={"checkbox"} disabled />
                    <Text>
                        Jog around the park 3x
                    </Text>
                </ItemGroup>

                <ListFooter>
                    <span>
                        items left
                    </span>

                    <FilterOptions>
                        <SmallButton type={"button"}>
                            All
                        </SmallButton>
                        <SmallButton type={"button"}>
                            Active
                        </SmallButton>
                        <SmallButton type={"button"}>
                            Completed
                        </SmallButton>
                    </FilterOptions>

                    <SmallButton type={"button"}>
                        Clear Completed
                    </SmallButton>
                </ListFooter>
            </ListContainer>

        </>
    );
}