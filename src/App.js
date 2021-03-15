import React from "react";
import styled, { ThemeProvider } from "styled-components";
import TodoList from "./containers/toDoList";
import AddTodo from "./containers/addTodo";
import Footer from "./containers/Footer";

export const Button = styled.button`
    background: ${(props) =>
        props.secondary
            ? props.theme.colors.secondary
            : props.theme.colors.main};
    color: ${(props) => (props.secondary ? "red" : "white")};
    font-size: 1 em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
    &:disabled {
        background: grey;
    }
`;

const InlineButton = styled(Button)`
    background: unset;
    color: black;
`;

const theme = {
    colors: {
        main: "red",
        secondary: "white",
    },
};

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Button>Styled Component</Button>
            <Button secondary>Styled Component: Secondary</Button>
            <InlineButton>Inline Button</InlineButton>
            <AddTodo />
            <TodoList />
            <Footer />
        </ThemeProvider>
    );
}
