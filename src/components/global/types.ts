import { isJsxOpeningElement } from "typescript";

export type AccType = {
  _id: number;
  name: string;
  createdAt: string;
  owner: string;
  updatedAt?: string
};


export type MainPageProps = {
  accounts: AccType[];
};

export type TablePartProps = {
  cells: Array<string | number>
  withView?: boolean
}

export type AccountContextProviderProps = {
  children: JSX.Element
}
