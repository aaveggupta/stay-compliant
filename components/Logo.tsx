import { ShieldCheck } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <ShieldCheck className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold">Stay Compliant</span>
    </div>
  );
};

export default Logo;
