import React from "react";

// Components
import Select from 'react-select'

interface Props {}


const SelectCustom: React.FC<Props> = () => {
  const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

  return (
    <Select options={options}  isLoading={true} styles={

      {
        option: () => ({
          fontFamily: "monospace"
        })
      }

    }/>
  )
};

export default SelectCustom;
