import * as React from "react";
import { SVGProps } from "react";
const SvgDenuncia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.688 21.875h13.125v2.188H19.687v-2.188Zm0 4.375h13.125v2.188H19.687V26.25Zm0 4.375h13.125v2.188H19.687v-2.188Zm-4.375-10.938a1.64 1.64 0 1 0 0 3.281 1.64 1.64 0 0 0 0-3.28Zm-1.094-12.03h2.187V17.5H14.22V7.656Z"
      fill="#495E93"
    />
    <path
      d="M15.313 4.375A10.95 10.95 0 0 1 26.25 15.313h2.188a13.125 13.125 0 1 0-13.125 13.124V26.25a10.937 10.937 0 1 1 0-21.875Z"
      fill="#495E93"
    />
  </svg>
);
export default SvgDenuncia;
