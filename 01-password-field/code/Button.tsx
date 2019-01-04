import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const ButtonContainer = styled.button`
    height: 50px;
    min-width: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    color: #fff;
    background: #4455bb;
    overflow: hidden;

    &:hover {
        opacity: 0.95;
    }

    &:disabled {
        opacity: 0.2;
    }

`;

// Define type of property
interface Props {
    text: string;
}

export class Button extends React.Component<Props> {
    // Set default properties
    static defaultProps = {
        text: "Submit",
        buttonDisabled: false
    };

    // Items shown in property panel
    static propertyControls: PropertyControls = {
        text: {
            type: ControlType.String,
            title: "Text"
        }
        buttonDisabled: {
            type: ControlType.Boolean,
            title: "Disabled",
            disabledTitle: "Reg",
            enabledTitle: "Disable"
        }
    };

    /**
     * See https://www.styled-components.com/docs/advanced#caveat for explanation on why className prop is needed here
     */
    render() {
        console.log(this.props)
        return (
            <ButtonContainer className={this.props.className} disabled={this.props.disabled || this.props.buttonDisabled }>
                {this.props.text}
            </ButtonContainer>
        );
    }
}
