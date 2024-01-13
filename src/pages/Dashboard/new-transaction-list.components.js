import { CalendarIcon } from '@radix-ui/react-icons';
import ContentLoader from 'react-content-loader';
import Box from '../../components/Box';
import StyledButton from '../../components/StyledButton';
import { styled } from '../../stitches.config';
import { useContext, useEffect, useRef, useState } from 'react';
import PageContext from './PageContext';

const RowBox = styled('div', {
    background: '$backgroundTertiary',
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
});

export const RowComponent = ({ data }) => {
    const { history } = useContext(PageContext);

    return (
        <RowBox className='text-sm p-3 pr-4 gap-3'>
            <Box
                className='p-3 flex flex-col gap-1'
                css={{
                    borderRadius: 8,
                    background: '$backgroundSecondary',
                }}
            >
                <div>No. Order</div>
                <div className='font-bold'>{data.sales_number}</div>
            </Box>
            <Box className='flex flex-col gap-0'>
                <div className='font-bold text-base'>{data.customer_name}</div>
                <div>{data.laundry_package_name}</div>
            </Box>
            <Box className='flex-1 flex justify-center'>
                <div className='flex items-center gap-1 mb-1'><CalendarIcon />{data.createdAt}</div>
            </Box>
            <Box>
                <StyledButton
                    onClick={() => { history.push(`/transaction/detail/${data.id}`) }}
                    className="font-bold"
                    type="button"
                    variant="primary"
                >
                    Proses
                </StyledButton>
            </Box>
        </RowBox>
    );
}

export const RowsSkeleton = () => {
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
                height={308}
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect width={anchorWidth} height="92" rx="4" ry="4" y="0" />
                <rect width={anchorWidth} height="92" rx="4" ry="4" y="108" />
                <rect width={anchorWidth} height="92" rx="4" ry="4" y="216" />
            </ContentLoader>
        </Box>
    )
}