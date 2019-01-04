import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const ButtonContainer = styled.div `
    height: 50px;
    min-width: 100px;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #FFF;
    background: #4455BB;
    overflow: hidden;

    &:hover{
        opacity: 0.95;
    }
`;

// Define type of property
interface Props {
    text: string;
}

export class Button extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
    text: "Submit"
    }

    // Items shown in property panel
    static propertyControls: PropertyControls = {
    text: { 
            type: ControlType.String, 
            title: "Text" 
        },
    }

    render() {
    return <ButtonContainer>{this.props.text}</ButtonContainer>;
    }
}
