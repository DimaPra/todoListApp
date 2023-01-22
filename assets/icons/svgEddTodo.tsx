import React, {FC} from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?:number;
    height?:number;
    color?:string;
};

export const EddTodoSvg:FC<IProps>= ({width,height,color}) => (
    <Svg
    width={27}
    height={27}
    viewBox="0 0 17 17"
  >
    <Path d="M7 2a1 1 0 0 1 0 2H4v8h8V9a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3Zm6-2a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V4h-1a1 1 0 1 1 0-2h1V1a1 1 0 0 1 1-1Z" 
    fill={'grey'}/>
  </Svg>
);