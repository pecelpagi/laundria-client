import Logo from '../Logo';
import AccountMenu from '../AccountMenu';

export default () => {
    return (
        <div className="shadow-lg fixed top-0 left-0 right-0 w-full bg-white py-1">
            <div className="flex flex-row items-center">
                <div className="basis-1/2"><Logo /></div>
                <div className="basis-1/2">
                    <div className="float-right mr-10">
                        <AccountMenu />
                    </div>
                </div>
            </div>
        </div>
    );
}