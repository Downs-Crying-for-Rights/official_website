export interface IProcessStepDetail {
  icon: string;
  text: string;
}

export interface IProcessStepAction {
  text: string;
  to?: string;
  href?: string;
}

export interface IProcessStep {
  title: string;
  icon: string;
  color: string;
  description: string;
  details?: IProcessStepDetail[];
  action?: IProcessStepAction;
}
