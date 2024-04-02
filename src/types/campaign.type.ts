export interface ICampaign {
  id: string;
  subId: string;
  name: string;
  contentName: string;
  phase: string;
  previous: { stepId: string }[];
  data:  {
    [key: string]: string;
  };
  final: boolean;
}
