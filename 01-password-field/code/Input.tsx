import * as React from "react";
import { Data, PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const data = Data({
  password: ""
});

const getBorderColor = props => {
  if (props.value.length == 0) {
    return "#aaa";
  }
  // if minimum value is greater than 0 AND entered password is less than 8, then make border color red.
  if (
    props.minimumPasswordLength > 0 &&
    props.value.length < props.minimumPasswordLength
  ) {
    return "#EE4444";
  } else {
    return "#aaa";
  }
};

const getBorderSize = props => {
  if (props.value.length == 0) {
    return "1px solid #aaa";
  }
  // if minimum value is greater than 0 AND entered password is less than 8, then make border color red.
  if (
    props.minimumPasswordLength > 0 &&
    props.value.length < props.minimumPasswordLength
  ) {
    return "2px solid #EE4444";
  } else {
    return "1px solid #aaa";
  }
};

const StyledHint = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: ${getBorderColor};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const InputContainer = styled.input`
  border: ${getBorderSize};
  border-color: ${getBorderColor};
  background-color: #fff;
  margin-top: 15px;
  padding: 10px 20px 10px 10px;
  border-radius: 5px;
  height: 100%;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 18px;
  color: #424242;

  /* &:focus {
    border-color: #4455BB;
  } */
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 14px;
  color: #777;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

// Define type of property
export interface Props {
  text: string;
}

export class Input extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    label: "Label",
    isPassword: false,
    placeholder: "Enter password",
    minimumPasswordLength: 0
  };

  handleChange = e => {
    data.password = e.target.value;
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    label: {
      type: ControlType.String,
      title: "Label"
    },
    isPassword: {
      type: ControlType.Boolean,
      title: "Password",
      disabledTitle: "No",
      enabledTitle: "Yes"
    },
    placeholder: {
      type: ControlType.String,
      title: "Placeholder"
    },
    minimumPasswordLength: {
      type: ControlType.Number,
      title: "Min Length"
    }
  };

  render() {
    const {
      handleChange,
      label,
      isPassword,
      minimumPasswordLength,
      password,
      placeholder
    } = this.props;

    // Figure out what to render below
    const labelEl = !!label ? <StyledLabel>{label}</StyledLabel> : "";
    
    return (
      <div>
        {labelEl}
        <InputContainer
          onChange={handleChange || this.handleChange}
          type={isPassword ? "password" : "text"}
          minimumPasswordLength={minimumPasswordLength}
          value={password || data.password}
          placeholder={placeholder}
        />
        {minimumPasswordLength > 0 ? (
          <StyledHint
            value={password || data.password}
            minimumPasswordLength={minimumPasswordLength}
          >{`Password must be longer than ${minimumPasswordLength} characters`}</StyledHint>
        ) : (
          ""
        )}
      </div>
    );
  }
}
