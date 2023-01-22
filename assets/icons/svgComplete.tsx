import React, {FC} from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?:number;
    height?:number;
    color?:string;
};

export const CompleteSvg:FC<IProps>= ({width,height,color}) => (
    <Svg
    width={28}
    height={28}
    viewBox="0 0 24 24"
    fill={'none'}
  >
    <Path
      d="m5 14 3.233 2.425a1 1 0 0 0 1.374-.167L18 6"
      stroke="gray"
      strokeWidth={2}
      strokeLinecap="round"
      
    />
  </Svg>
);