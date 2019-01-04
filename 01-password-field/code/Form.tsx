import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import { Input } from "./Input";
import { Button } from "./Button";

const style: React.CSSProperties = {

};

// Define type of property
interface Props {
    text: string;
}

export class Form extends React.Component<Props> {

    // Set default properties
    static defaultProps = {
        label: "Label",
        isPassword: false,
        placeholder: "Enter password",
        minimumPasswordLength: 0 
    }

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
    }

    render() {
    return <div>
        <Input 
            label={this.props.label} placeholder={this.props.placeholder} isPassword={this.props.isPassword} minimumPasswordLength={this.props.minimumPasswordLength}
        />
        <Button/>
    </div>;
    }
}
