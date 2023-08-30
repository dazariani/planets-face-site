import { Types } from "../../app-types";

export interface Props {
  pageValue: number;
  winWidth: number;
  data: Types[];
  setPageValue: (prop: number) => void;
  setContentValue: (prop: number) => void;
  isNavOn: boolean;
  setIsNavOn: (prop: boolean) => void;
}
