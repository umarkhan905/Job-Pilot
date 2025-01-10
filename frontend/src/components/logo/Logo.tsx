import { BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import Heading from "../ui/Heading";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl text-primary">
      <div className="flex items-center justify-center p-2 rounded-md bg-primary/10">
        <Icon className="size-6" icon={BriefcaseBusiness} />
      </div>
      <Heading variant="h1" className="font-bold">
        Job Pilot
      </Heading>
    </Link>
  );
};

export default Logo;
