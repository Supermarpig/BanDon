import type { Variant, Theme } from "./button-types";

  // primary: dark_gray: "#333333"
  // secondary: font steel_blue: "#669999"
  //            border & bg pale_blue: "#ADC4C6"
export function getButtonStyles(variant: Variant, theme: Theme) {
  let classStr = "border-2 ";

  if (variant === "contained") {
    switch (theme) {
      case "primary":
        classStr += "text-white border-dark_gray bg-dark_gray";
        break;
      case "secondary":
        classStr += "text-white border-pale_blue bg-pale_blue";
        break;
    }
  }

  if (variant === "outlined") {
    switch (theme) {
      case "primary":
        classStr += "text-dark_gray border-dark_gray";
        break;
      case "secondary":
        classStr += "text-steel_blue border-pale_blue";
        break;
    }
  }

  if (variant === "text") {
    switch (theme) {
      case "primary":
        classStr += "text-dark_gray border-white bg-white";
        break;
      case "secondary":
        classStr += "text-steel_blue border-pale_blue bg-pale_blue";
        break;
    }
  }

  return classStr;
}

  // primary: pale_blue: "#ADC4C6"
  // secondary: silver: "#C0C0C0"
  // tertiary: dim_gray: "#666666"
export function getIconButtonStyles(variant: Variant, theme: Theme) {
  let color = "";
  let borderColor = "";
  let backgroundColor = "";

  if (variant === "contained") {
    switch (theme) {
      case "primary":
        color = "text-white ";
        borderColor = "border-pale_blue ";
        backgroundColor = "bg-pale_blue";
        break;
      case "secondary":
        color = "text-white ";
        borderColor = "border-silver ";
        backgroundColor = "bg-silver";
        break;
      case "tertiary":
        color = "text-white ";
        borderColor = "border-dim_gray ";
        backgroundColor = "bg-dim_gray";
        break;
    }
  }

  if (variant === "outlined") {
    switch (theme) {
      case "primary":
        color = "text-pale_blue ";
        borderColor = "border-pale_blue ";
        backgroundColor = "bg-white";
        break;
      case "secondary":
        color = "text-silver ";
        borderColor = "border-silver ";
        backgroundColor = "bg-white";
        break;
      case "tertiary":
        color = "text-dim_gray ";
        borderColor = "border-dim_gray ";
        backgroundColor = "bg-white";
        break;
    }
  }

  if (variant === "text") {
    switch (theme) {
      case "primary":
        color = "text-pale_blue ";
        borderColor = "border-white ";
        backgroundColor = "bg-white";
        break;
      case "secondary":
        color = "text-silver ";
        borderColor = "border-white ";
        backgroundColor = "bg-white";
        break;
      case "tertiary":
        color = "text-dim_gray ";
        borderColor = "border-white ";
        backgroundColor = "bg-white";
        break;
    }
  }

  const classStr = color + borderColor + backgroundColor;
  return classStr;
}
