import { CaretRightIcon } from "@radix-ui/react-icons";
import * as StyledComponent from './list.styled-components';
import StyledButton from "../../../components/StyledButton";
import { useContext } from "react";
import ComponentContext from "./ComponentContext";

export const RowData = ({ data, onClick, activeId }) => {
    const { onChooseData } = useContext(ComponentContext);
    const isActive = String(data.id) === String(activeId);
    const iconSize = 20;

    return (
        <StyledComponent.RowWrapper {...{ onClick, isActive }}>
            <div className="text-base font-semibold">{data.fullname}</div>
            <div>{data.addr}</div>
            <div>{`Phone: ${data.phone}`}</div>
            {isActive && (
                <StyledButton
                    onClick={() => { onChooseData(data); }}
                    className="mt-2 flex text-sm items-center"
                    type="button"
                    variant="primary"
                >
                    Pilih Customer<CaretRightIcon color="#FFFFFF" height={iconSize} width={iconSize} />
                </StyledButton>
            )}
        </StyledComponent.RowWrapper>
    );
}