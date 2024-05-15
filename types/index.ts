import {ReactNode, SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};


export type BoxProps = {

  className? : string;
  children: ReactNode;
}