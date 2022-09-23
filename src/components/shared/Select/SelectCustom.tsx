// import React from "react";

// // Styles
// import styles from "./SelectCustom.module.css";

// // Components
import Select from "react-select";

// interface Props {
//   isMulti?: boolean;
//   closeMenuOnSelect?: boolean;
//   placeholder: string;
//   label?: string;
// }

// const selectStyles = {
//   control: (styles: any) => {
//     return {
//       ...styles,
//       minHeight: "clamp(45px, 10vw, 40px)",
//       backgroundColor: "transparent",
//     };
//   },
//   clearIndicator: (styles: any) => {
//     return {
//       ...styles,
//       color: "#fff",
//     };
//   },
//   placeholder: (styles: any) => {
//     return {
//       ...styles,
//       color: "#cbcbcb",
//       fontSize: "clamp(0.75rem, 3vw, 1.125rem)",
//       fontWeight: 400,
//     };
//   },
//   multiValue: (styles: any) => {
//     return {
//       ...styles,
//       backgroundColor: "red",
//     };
//   },
//   multiValueRemove: (styles: any) => {
//     return {
//       ...styles,
//       cursor: "pointer",
//       ":hover": {
//         color: "#fff",
//       },
//     };
//   },
//   option: (styles: any) => {
//     return {
//       ...styles,
//       fontSize: 14,
//     };
//   },
//   singleValue: (styles: any) => {
//     return {
//       ...styles,
//       color: "#fff",
//     };
//   },
// };

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
// ];

// const SelectCustom: React.FC<Props> = ({
//   isMulti = false,
//   closeMenuOnSelect = true,
//   placeholder,
//   label,
// }) => {
//   return (
//     <div className={styles.container}>
//       <label>{label && label}</label>
//       <Select
//         isMulti={isMulti}
//         closeMenuOnSelect={closeMenuOnSelect}
//         placeholder={placeholder}
//         options={options}
//         className={styles.react_select}
//         classNamePrefix={styles.react_select}
//         styles={selectStyles}
//         theme={(theme) => ({
//           ...theme,
//           borderRadius: 8,
//           background: "#000",
//           colors: {
//             ...theme.colors,
//             primary25: "#4166C6",
//             // primary: "#fff",
//             primary50: "#fff",
//           },
//         })}
//       />
//     </div>
//   );
// };

// export default SelectCustom;

import { CSSProperties } from "react";

// import Select from "react-select";
// import {
// import { Select } from 'react-select';
// ColourOption,
//   colourOptions,
//   FlavourOption,
//   GroupedOption,
//   groupedOptions,
// } from "../data";

const data = [
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AS", label: "American Samoa" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District Of Columbia" },
  { value: "FM", label: "Federated States Of Micronesia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "GU", label: "Guam" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MH", label: "Marshall Islands" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "MP", label: "Northern Mariana Islands" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PW", label: "Palau" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VI", label: "Virgin Islands" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" },
];

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const teste = [{ label: "Testando", options: data }];

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles: CSSProperties = {
  backgroundColor: "#EBECF0",
  borderRadius: "8em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 16,
  fontWeight: "normal",
  lineHeight: "1",
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data: any) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

const SelectCustom = () => {
  return (
    <Select
      defaultValue={colourOptions[1]}
      options={teste}
      formatGroupLabel={formatGroupLabel}
    />
  );
};

export default SelectCustom;
