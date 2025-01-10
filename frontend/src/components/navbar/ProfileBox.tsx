import Box from "../ui/Box";
import AvatarDropdown from "./AvatarDropdown";

const ProfileBox = () => {
  return (
    <Box className="flex items-center bg-base-300/40">
      <AvatarDropdown />

      <div className="ml-3">
        <p className="text-sm font-bold text-primary">{`umar6029`}</p>
        <p className="text-sm">{`umar6029@gmail.com`}</p>
      </div>
    </Box>
  );
};

export default ProfileBox;
