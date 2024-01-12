import ContentLoader from 'react-content-loader';
import Box from "../../components/Box";

export const SummarySkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={1170}
            height={92}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect width="1170" height="92" rx="4" ry="4" />
        </ContentLoader>
    )
}

export const SummaryItem = ({ label, amount }) => {
    return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: 'center' }}>
            <div>{label}</div>
            <div className='font-bold text-4xl'>{amount}</div>
        </Box>
    );
}