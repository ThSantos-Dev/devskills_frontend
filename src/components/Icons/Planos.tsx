import * as React from "react";
import { SVGProps } from "react";
const SvgPlanos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.847 6.764h23.334v2.917H3.847V6.764ZM6.764.931h17.5v2.917h-17.5V.93Zm20.402 11.652H3.833A2.917 2.917 0 0 0 .916 15.5v11.667a2.917 2.917 0 0 0 2.917 2.916h23.333a2.917 2.917 0 0 0 2.917-2.916V15.5a2.917 2.917 0 0 0-2.917-2.917ZM13.02 27.167l-4.812-4.725 2.041-2.042 2.771 2.77 7.73-7.728 2.041 2.041-9.77 9.684Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgPlanos;
