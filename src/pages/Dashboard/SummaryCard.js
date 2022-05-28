import { styled } from '../../stitches.config';

const Wrapper = styled('div', {
    borderLeft: '4px solid $backgroundPrimary'
});

const SummaryCard = ({ icon, label, amount }) => (
    <Wrapper className="bg-white shadow rounded">
        <div className="flex flex-row items-center py-3 px-4">
            <div className="w-1/4 text-xl">
                {icon({ height: 25, width: 25 })}
            </div>
            <div className="w-3/4 text-right">
                <h3 className="text-lg font-semibold">{amount}</h3>
                <span className="text-sm">{label}</span>
            </div>
        </div>
    </Wrapper>
);

export default SummaryCard;
