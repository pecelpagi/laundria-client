import Logo from '../Logo';
import AccountMenu from '../AccountMenu';

export default () => {
    return (
        <div className="shadow-lg fixed top-0 left-0 right-0 w-full bg-white">
            <div className="flex flex-row items-center">
                <div class="basis-1/2"><Logo /></div>
                <div class="basis-1/2">
                    <div className="float-right mr-10">
                        <AccountMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}