import { Loader2Icon } from "lucide-react";

export default function loading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Loader2Icon className="stroke-primary animate-spin" size={30} />
    </div>
  );
}
