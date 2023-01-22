import React, {FC} from "react"
import Svg, { Path } from "react-native-svg"

interface IProps {
    width?:number;
    height?:number;
    color?:string;
};

export const TodoSvg:FC<IProps>= ({width,height,color}) => (
  <Svg 
    width={width || 34} 
    height={height || 34} 
    viewBox="0 0 36 36" 
> 
    <Path 
        fill={color || '#fff'} 
        d="M29.29 34H6.71A1.7 1.7 0 0 1 5 32.31V6.69A1.75 1.75 0 0 1 7 5h2v2H7v25h22V7h-2V5h2.25A1.7 1.7 0 0 1 31 6.69v25.62A1.7 1.7 0 0 1 29.29 34Z" 
    /> 
    <Path 
        fill={color || '#fff'} 
        d="M16.66 25.76 11.3 20.4a1 1 0 0 1 1.42-1.4l3.94 3.94 8.64-8.64a1 1 0 0 1 1.41 1.41Z" 
    /> 
    <Path 
        fill={color || '#fff'} 
        d="M26 11H10V7.33A2.34 2.34 0 0 1 12.33 5h1.79a4 4 0 0 1 7.75 0h1.79A2.34 2.34 0 0 1 26 7.33ZM12 9h12V7.33a.33.33 0 0 0-.33-.33H20V6a2 2 0 0 0-4 0v1h-3.67a.33.33 0 0 0-.33.33Z" 
    /> 
    <Path fill="none" d="M0 0h36v36H0z" /> 
</Svg>
);

