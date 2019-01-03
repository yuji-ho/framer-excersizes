import * as React from "react";
import { PropertyControls, ControlType } from "framer";

const style: React.CSSProperties = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "black",
    overflow: "hidden",
    borderRadius: "10px",
    outline: "black"
};

// Define type of property
interface Props {
    text: string;
}

export class Children extends React.Component<Props> {

    // Set default properties

    render() {
    return <div style={style}>{this.props.children}</div>;
    }
}
