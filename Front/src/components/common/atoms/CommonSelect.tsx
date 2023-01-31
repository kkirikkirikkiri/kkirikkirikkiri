import { FC } from "react";
import Select, { Props } from "react-select";
const CommonSelect: FC<Props> = (props) => {
  return (
    <Select
      styles={{
        indicatorSeparator: () => ({
          width: 0,
        }),
        container: (style, { isFocused }) => {
          return {
            ...style,
            width: "100%",
            height: 44,
          };
        },
        control: (style, { isFocused }) => {
          return {
            ...style,
            height: "100%",
            border: "1px solid #EAEAEA",
            display: "flex",
            borderRadius: 12,
            boxShadow: "0",
            paddingLeft: 12,
            paddingRight: 20,
            "&:hover": {
              borderColor: "unset",
            },
          };
        },
        indicatorsContainer: (style) => {
          return {
            ...style,
            marginRight: -8,
          };
        },
        dropdownIndicator: (style, { isFocused }) => ({
          ...style,
          transform: isFocused ? "rotate(180deg)" : "rotate(0deg)",
        }),

        valueContainer: (style) => ({
          ...style,
          padding: 0,
        }),
        placeholder: (style) => ({
          ...style,
          fontSize: 12,
          color: "#424242",
          fontWeight: 350,
        }),
        singleValue: (style) => ({
          ...style,
          fontSize: 14,
          color: "#1a1a1a",
        }),
        menuList: (style) => {
          return { ...style, padding: 0 };
        },
        option: (style, { isDisabled, isFocused, isSelected }) => {
          return {
            ...style,
            backgroundColor: isFocused ? "#FBFBFB" : "#fff",
            fontSize: 14,
            color: "#424242",
            fontWeight: isSelected ? "700" : "400",
            "&:hover": {
              backgroundColor: "#FBFBFB",
            },
          };
        },
        menu: (style) => {
          return {
            ...style,
            border: "1px solid #FBFBFB",
          };
        },
      }}
      {...props}
    />
  );
};

export default CommonSelect;
