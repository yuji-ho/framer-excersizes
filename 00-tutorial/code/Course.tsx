import * as React from "react";
import { PropertyControls, ControlType } from "framer";
import styled from "styled-components";

const CourseContainer = styled.div`
  background: ${props => props.color};
  height: 100%;
  color: white;
  padding: 20px;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  border-radius: 10px;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    transform: scale(1.1, 1.1) translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    opacity: 0.5;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
  }

  p {
    position: absolute;
    top: 0;
    left: 20;
  }
`;

// Define type of property
interface Props {
  text: string;
  color: string;
  image: string;
}

export class Course extends React.Component<Props> {
  // Set default properties
  static defaultProps = {
    text: "Hello World!",
    color: "black",
    image: ""
  };

  // Items shown in property panel
  static propertyControls: PropertyControls = {
    text: { type: ControlType.String, title: "Text" },
    color: { type: ControlType.Color, title: "Background Color" },
    image: { type: ControlType.Image, title: "Background Image" }
  };

  render() {
    return (
      <CourseContainer color={this.props.color} image={this.props.image}>
        <p>{this.props.text}</p>
      </CourseContainer>
    );
  }
}
