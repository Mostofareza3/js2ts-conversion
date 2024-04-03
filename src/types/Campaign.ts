import { Edge, Node as IFNode } from "react-flow-renderer";

export type IAnalytic =
  | { label: string; color: string; value: string; isValid: boolean }
  | { label: string; color: string; value: string; isValid?: undefined };

export interface IData {
  analytics: IAnalytic[];
}

export interface ICampaign {
  id: number;
  subId: number;
  name: string;
  contentName: string;
  phase: string;
  previous: { stepId: number }[];
  data: IData;
  final: boolean;
}

export type INode = IFNode<any> | Edge<any>;
