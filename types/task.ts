import { string } from "zod";

export enum TaskType {
  LAUNCH_BROWSER = "LAUNCH_BROWSER",
}

export enum TashParamType {
  STRING = "STRING",
}

export interface TaskParam {
  name: string;
  type: TashParamType;
  helperText?: string;
  required?: boolean;
  hideHandle?: boolean;
  [key: string]: any;
}
