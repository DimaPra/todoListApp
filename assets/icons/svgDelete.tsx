import React, {FC} from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?:number;
    height?:number;
    color?:string;
};

export const DeleteSvg:FC<IProps>= ({width,height,color}) => (
  <Svg
  width={30}
  height={30}
  viewBox="0 0 24 24"
>
  <Path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" 
  fill={'grey'}/>
</Svg>
);