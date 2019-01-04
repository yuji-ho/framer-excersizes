import { Data, animate, Override, Animatable } from "framer";
import { InputContainer } from "./Input";

const data = Data({
  loggedIn: false,
  password: ""
});

const handleLogin = () => {
  // animated out items
  console.log("Logged in");
};

const handlePasswordError = () => {
  console.log("Wrong password");
};

export const PasswordOverride: Override = () => {
    // /** 
    //  * Find the child that refers to the input element
    // */
    // props.children.map(child => {
    //     console.log(child)
    //     // console.log(child.element)
    // });
  return {
    onChange() {
      console.log(e);
      data.password = e.target.value;
    }
  };
};

export const ButtonOverride: Override = () => {
  return {
    onClick: () => {
      if (data.password.length >= 8) {
        data.loggedIn = true;
        handleLogin();
      } else {
        data.loggedIn = false;
        handlePasswordError();
      }
    }
  };
};

export const DisableButtonOverride: Override = () => {
  return {
    onClick: () => {

      }
    }
  };
};
