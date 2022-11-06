import * as React from "react";
import { SVGProps } from "react";
const SvgTests = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.25 2.917H8.75a2.925 2.925 0 0 0-2.916 2.916v23.334a2.925 2.925 0 0 0 2.917 2.916h17.5a2.925 2.925 0 0 0 2.916-2.916V5.832a2.925 2.925 0 0 0-2.916-2.917ZM8.75 5.832h7.292V17.5l-3.646-2.188L8.752 17.5V5.833Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgTests;
