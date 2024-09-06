import React from "react";

type DropdownProps = {
  options: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ options }) => {
  return (
    <select className="select select-bordered bg-gray-100 text-black max-w-xs">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
