import { Data, animate, Override, Animatable, Curve } from "framer";

const bezierCurve = [0.2, 0.8, 0.2, 1] as Curve;
const duration = 0.5;
const bezierOptions = { curve: bezierCurve, duration };

const springOptions = {
  tension: 500,
  friction: 30
};

const data = Data({
  left: Animatable(40),
  right: Animatable(40),
  top: Animatable(169),
  bottom: Animatable(438),
  cardOpen: false,
  opacity: Animatable(0),
  menuOpacity: Animatable(1),
  menuVisibility: true,
  closeVisibility: false
});

const handleCardClose = () => {
  animate.spring(data.left, 40, springOptions);
  animate.spring(data.right, 40, springOptions);
  animate.spring(data.top, 169, springOptions);
  animate.spring(data.bottom, 438, springOptions);
  animate.bezier(data.opacity, 0, bezierOptions);
  animate.bezier(data.menuOpacity, 1, bezierOptions);
  data.menuVisibility = true;
  data.closeVisibility = false;
};

const handleCardOpen = () => {
  animate.spring(data.left, 20, springOptions);
  animate.spring(data.right, 20, springOptions);
  animate.spring(data.top, 112, springOptions);
  animate.spring(data.bottom, 0, springOptions);
  animate.bezier(data.opacity, 1, bezierOptions);
  animate.bezier(data.menuOpacity, 0, bezierOptions);
  data.menuVisibility = false;
  data.closeVisibility = true;
};

export const CardOverride: Override = () => {
  return {
    left: data.left,
    right: data.right,
    top: data.top,
    bottom: data.bottom,
    onTap() {
      data.cardOpen = !data.cardOpen;
      if (data.cardOpen) {
        handleCardOpen();
      } else {
        handleCardClose();
      }
    }
  };
};

export const BackgroundOverride: Override = () => {
  return {
    opacity: data.opacity
  };
};

export const MenuOverride: Override = () => {
  return {
    opacity: data.menuOpacity,
    visible: data.menuVisibility
  };
};

export const CloseOverride: Override = () => {
  return {
    onTap: () => {
      data.cardOpen = !data.cardOpen;

      if (data.cardOpen) {
        handleCardOpen();
      } else {
        handleCardClose();
      }
    }
  };
};

export const TopCoursesOverride: Override = () => {
  return {
    style: {
      display: data.cardOpen ? "none" : "block",
    }
  };
};
