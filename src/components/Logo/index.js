import { LogoWrapper } from "./Logo.styles";

const Logo = ({ variant }) => (
    <LogoWrapper {...{ variant }}>
        <span>Aplikasi Manajemen Laundry</span>
        <h4>Laundria</h4>
    </LogoWrapper>
)

export default Logo;