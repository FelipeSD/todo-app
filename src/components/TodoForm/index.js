import React from "react";
import {
    CheckboxContainer,
    FilterOptions,
    InputText,
    ItemGroup,
    ListContainer,
    ListFooter,
    SmallButton,
    Text
} from './todoForm.styled';

export default function TodoForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)} method="POST">
                <ItemGroup className={"individual"}>
                    <input name={"newCheckItem"} type={"checkbox"} disabled/>
                    <InputText
                        type={"text"}
                        name={"todoItem"}
                        placeholder={"Create a new todo..."}
                    />
                </ItemGroup>
            </form>

            <ListContainer>
                <ItemGroup className={"list-item"}>
                    <CheckboxContainer>
                        <input type={"checkbox"} name={"checkbox1"}/>
                        <Text>
                            Complete online Javascript course
                        </Text>
                    </CheckboxContainer>
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