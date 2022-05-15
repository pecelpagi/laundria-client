import { Avatar, AvatarImage, AvatarFallback } from "./CustomAvatar.styles";
import ImageSource from "./image.png";

export default () => (
    <Avatar>
        <AvatarImage
            src={ImageSource}
            alt="Avatar Image"
        />
        <AvatarFallback delayMs={600}>LI</AvatarFallback>
    </Avatar>
);