import Box from "../../components/Box";
import Spinner from "../../components/Spinner";

export const SummarySkeleton = () => {
    return (
        <Box
            css={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                padding: '15px 0px',
            }}
            className='flex gap-4 rounded mt-6'
        >
            <SummaryItem label="Jumlah Customer" amount="-" loading />
            <SummaryItem label="Order Baru" amount="-" loading />
            <SummaryItem label="Total Order" amount="-" loading />
        </Box>
    )
}

export const SummaryItem = ({ label, amount, loading = false }) => {
    return (
        <Box
            className='rounded p-5 relative'
            css={{
                display: 'flex', background: '$backgroundSecondary',
                flexDirection: 'column', gap: 4, textAlign: 'left'
            }}>
            <div>{label}</div>
            <div className='font-bold text-4xl'>{amount}</div>
            {loading && <Spinner text="" />}
        </Box>
    );
}