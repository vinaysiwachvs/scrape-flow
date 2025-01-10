import { TashParamType, TaskType } from "@/types/task";
import { GlobeIcon, LucideProps } from "lucide-react";

export const LaunchBrowserTask = {
  type: TaskType.LAUNCH_BROWSER,
  lable: "Launch Browser",
  icon: (props: LucideProps) => (
    <GlobeIcon className="stroke-pink-400" {...props} />
  ),
  isEntryPoint: true,
  inputs: [
    {
      name: "Website Url",
      type: TashParamType.STRING,
      helperText: "eg: https://www.google.com - sample",
      required: true,
      hideHandle: true,
    },
  ],
};
