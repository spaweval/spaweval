"use client";
import Select, { components } from "react-select";

import Icons from "@/Icons";
import Icon from "../Icon";

//css
import { useTheme } from "styled-components";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "grape", label: "Grape" },
];

const CustomControl = (props: any) => (
  <components.Control {...props}>
    <span className="ml-3 mr-2">
      <Icon src={Icons.Search} alt="search" width={20} height={20} />
    </span>
    {props.children}
  </components.Control>
);

const SearchableSelect = () => {
  const theme = useTheme();
  const handleChange = (selectedOption: any) => {
    console.log("Selected:", selectedOption);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="All Categories"
      isSearchable
      components={{
        Control: CustomControl,
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      styles={{
        control: (base, state) => ({
          ...base,
          border: "none",
          width: "100%",
          borderColor: 'none' 
        }),
        placeholder: (base) => ({
          ...base,
          color: theme.colors.secondary,
          fontWeight: theme.fontWeights.bold
        }),
        input: (base) => ({
            ...base,
            border: 'none'
        }),
      }}
    />
  );
}

export default SearchableSelect;