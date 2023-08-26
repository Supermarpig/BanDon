import { cN } from "@lib/cN";
import type { TagProps, Variant } from "./tag-types";
import Tag from "./tag";

interface Props extends TagProps {
  variant?: Variant;
}

const TagXin = (props: Props) => {
  const { variant = "text", className, children, ...tagProps } = props;

  const variantStyle = {
    outlined: "border-2 border-pale_blue text-teal",
    contained: "bg-starry_gray text-white",
    text: "text-steel_blue",
  };

  return (
    <Tag {...tagProps} className={cN(variantStyle[variant], className)}>
      {children}
    </Tag>
  );
};

export default TagXin;
