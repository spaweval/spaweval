"use client";

//css
import {  Option, Select } from "./index.styles";

type StyledSelectProps = {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
  options: Array<{ label: string; value: string }>;
};

const StyledSelect = ({
  value,
  onChange,
  disabled,
  autoComplete,
  autoFocus,
  options,
}: StyledSelectProps) => {
  return (
    <Select
      value={value}
      autoComplete={autoComplete ?? "on"}
      autoFocus={autoFocus ?? true}
      onChange={(e) => onChange && onChange(e.target.value)}
      disabled={disabled}
    >
      <Option>Select </Option>
      {options.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </Select>
  );
};

export default StyledSelect;
