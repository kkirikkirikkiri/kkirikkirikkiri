import chroma from "chroma-js";
import Select from "react-select";

const ColorSelect = () => {
  const colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink",
    "black",
    "white",
    "gray",
    "blue",
    "skyblue",
    "brown",
    "purple",
    "teal",
    "cyan",
    "lime",
    "magenta",
    "rose",
    "amber",
    "emerald",
    "sky",
    "fuchsia",
    "violet",
    "wheat",
    "silver",
    "gold",
    "coral",
    "maroon",
    "olive",
    "navy",
  ];
  const dot = (color = "transparent") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: "block",
      marginRight: 8,
      height: 22,
      width: 22,
    },
  });
  return (
    <Select
      placeholder="내가 좋아하는 색깔을 입력해 주세요."
      isMulti
      isSearchable
      closeMenuOnSelect={false}
      hideSelectedOptions={true}
      options={colorList.map((item) => ({ label: item, value: item }))}
      styles={{
        indicatorSeparator: () => ({
          width: 0,
        }),
        container: (style, { isFocused }) => {
          return {
            ...style,
            width: "100%",
            height: "fit-content",
            minHeight: 44,
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
          padding: 8,
        }),
        placeholder: (style) => ({
          ...style,
          fontSize: 12,
          color: "#424242",
          fontWeight: 350,
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          const colorString = (data as { value: string }).value;
          console.log("colorString", colorString);
          let color = null;
          try {
            color = chroma(colorString);
          } catch (error) {}
          return {
            ...styles,
            backgroundColor: isDisabled
              ? undefined
              : isSelected
              ? colorString
              : isFocused
              ? color?.alpha(0.1).css()
              : undefined,
            color: isDisabled
              ? "#ccc"
              : isSelected
              ? color && chroma.contrast(color, "white") > 2
                ? "white"
                : "black"
              : colorString,
            cursor: isDisabled ? "not-allowed" : "default",
            ...dot(colorString),
            ":active": {
              ...styles[":active"],
              backgroundColor: !isDisabled
                ? isSelected
                  ? colorString
                  : color?.alpha(0.3).css()
                : undefined,
            },
          };
        },
        input: (styles) => ({ ...styles, ...dot() }),
        multiValue: (styles, { data }) => {
          const colorString = (data as { value: string }).value;
          return {
            ...styles,
            backgroundColor: "#fff",
            border: `1px solid ${colorString}`,
            paddingLeft: 8,
            borderRadius: 8,
          };
        },
        menuList: (style) => {
          return { ...style, padding: 0 };
        },
        menu: (style) => {
          return {
            ...style,
            border: "1px solid #FBFBFB",
          };
        },
      }}
    />
  );
};

export default ColorSelect;
