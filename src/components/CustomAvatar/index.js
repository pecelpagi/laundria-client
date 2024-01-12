import { Avatar, AvatarImage, AvatarFallback } from "./custom-avatar.styles";
import ImageSource from "./image.png";

const CustomAvatar = () => (
    <Avatar>
        <AvatarImage
            src={ImageSource}
            alt="Avatar Image"
        />
        <AvatarFallback delayMs={600}>LI</AvatarFallback>
    </Avatar>
);

export default CustomAvatar;