import { SVGProps } from "react";
const SvgFolder = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="100"
    height="100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.062 25.875H4.521v55.52c0 4.699 3.843 8.543 8.541 8.543h72.605v-8.542H13.062V25.875Z"
      fill="currentColor"
    />
    <path
      d="M89.938 17.333H60.042L51.5 8.792H30.146c-4.698 0-8.499 3.843-8.499 8.541l-.043 46.98c0 4.697 3.844 8.541 8.542 8.541h59.792c4.697 0 8.541-3.844 8.541-8.542V25.875c0-4.698-3.844-8.542-8.541-8.542Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgFolder;
