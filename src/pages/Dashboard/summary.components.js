import ContentLoader from 'react-content-loader';
import Box from "../../components/Box";
import { useEffect, useRef, useState } from 'react';

export const SummarySkeleton = () => {
    const [anchorWidth, setAnchorWidth] = useState(0);
    const anchorRef = useRef(null);

    useEffect(() => {
        if (anchorRef) {
            const width = anchorRef.current.clientWidth;

            setAnchorWidth(width);
        }
    }, []);

    return (
        <Box className='relative'>
            <Box
                ref={anchorRef}
                css={{
                    zIndex: '-1', width: '100%', height: '12px',
                    background: 'transparent', position: 'absolute',
                    top: 0, left: 0
                }}
            />
            <ContentLoader
                speed={2}
                width={anchorWidth}
                height={92}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect width={anchorWidth} height="92" rx="4" ry="4" />
            </ContentLoader>
        </Box>
    )
}

export const SummaryItem = ({ label, amount }) => {
    return (
        <Box
        className='rounded p-5'
        css={{
            display: 'flex', background: '$backgroundSecondary',
            flexDirection: 'column', gap: 4, textAlign: 'left'
        }}>
            <div>{label}</div>
            <div className='font-bold text-4xl'>{amount}</div>
        </Box>
    );
}