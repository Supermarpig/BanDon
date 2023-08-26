export const  getBtnSize = (size:string) => {
  let btnSize;
  switch (size) {
    case "xs":
      btnSize = "w-[26px] h-[26px]";
      break;
    case "sm":
      btnSize = "w-[30px] h-[30px]";
      break;
    case "base":
      btnSize = "w-[36px] h-[36px]";
      break;
    case "lg":
      btnSize = "w-[44px] h-[44px]";
      break;
    case "xl":
      btnSize = "w-[50px] h-[50px]";
      break;
  }
  return btnSize;
}
