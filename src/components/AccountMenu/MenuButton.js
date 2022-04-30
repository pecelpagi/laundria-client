import { DotsVerticalIcon } from '@radix-ui/react-icons';
import CustomAvatar from "../CustomAvatar";

const MenuButton = ({ onClick }) => (
    <div className="inline-block">
        <div className="flex flex-row items-center">
            <div className="basis-1/4">
                <CustomAvatar />
            </div>
            <div className="basis-2/4 pl-2 hidden sm:block">
                <h5 className="mx-0 font-semibold text-sm whitespace-nowrap text-ellipsis overflow-hidden w-24">Enak Banget</h5>
                <span className="text-xs subpixel-antialiased tracking-wide">superadmin</span>
            </div>
            <div className="basis-1/4">
                <button type="button" id="dot-menu-button" className="px-4 py-2" {...{ onClick }}><DotsVerticalIcon id="dot-menu-icon" /></button>
            </div>
        </div>
    </div>
);

export default MenuButton;