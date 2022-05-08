import { styled } from '../../stitches.config';

const Wrapper = styled('div', {
    position: "absolute",
    top: "0px",
    height: "calc(100% - 35px)",
    background: "rgba(255, 255, 255, 0.45)",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export default () => (
    <Wrapper className="text-sm">Loading...</Wrapper>
)