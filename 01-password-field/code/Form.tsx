import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Button } from "./Button";
import { Input } from "./Input";
import styled from "styled-components";

const style: React.CSSProperties = {};

const StyledButton = styled(Button) `
    margin-top: 20px;

    /* &:disabled {
        background-color: #ccc;
    } */
`;

// Define type of property
interface Props {}

export class Form extends React.Component<Props> {
// Add a constructor with this.state to enable shared state across multiple components. Each new function needs to bind this (arrow functions not supported).
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            disabled: true
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // Set default properties. Include all default properties in children components. Override default by calling key / value.
    static defaultProps = {
        ...Input.defaultProps,
        ...Button.defaultProps,
    };

    // Items shown in property panel. Include all property controls in children components.
    static propertyControls: PropertyControls = {
        ...Input.propertyControls,
        ...Button.propertyControls
    };


// This event handler gets passed to the input component so we can update the shared state in form component.
    handleChange(e) {
        let isButtonDisabled;

        const updatedPasswordValue = e.target.value;

        if (updatedPasswordValue.length < this.props.minimumPasswordLength) {
            isButtonDisabled = true;
        } else {
            isButtonDisabled = false;
        }

        // The following line will force React to re-render because state has changed.
        this.setState({
            password: updatedPasswordValue,
            disabled: isButtonDisabled
        });
    }

    render() {
        const { state, props } = this;
        return (
            <div>
                <Input
                    // Pass down the props set via a PropertyControl setting in the Framer UI
                    // that are relevant to the Input component
                    handleChange={props.handleChange}
                    label={props.label}
                    isPassword={props.isPassword}
                    minimumPasswordLength={props.minimumPasswordLength}
                    placeholder={props.placeholder}
                    // Pass down props from the Form components state object that are relevant to the Input component
                    password={state.password}
                    // Pass down a handleChange event handler to override the one in the Input component
                    handleChange={this.handleChange}                    
                />
                <StyledButton
                    // Pass down the props set via a PropertyControl setting in the Framer UI
                    // that are relevant to the Button component
                    text={props.text}
                    disabled={this.state.disabled}
                />
            </div>
        );
    }
}
