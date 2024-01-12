import ReactPaginate from 'react-paginate';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons'
import Box from '../../components/Box';

const Pagination = ({ totalPage, page, onChange }) => {
    return (
        <Box
            className="flex justify-center mt-2 text-base"
            css={{
                '& .laundria-pagination-container': {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 8,
                    '& li': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        minWidth: '30px',
                        minHeight: '30px',
                        textAlign: '-webkit-center',
                        border: '1px solid #333',
                        borderRadius: 2,
                        'a': {
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 16,
                        },
                        '&.previous, &.next': {
                            border: '1px solid #333',
                        },
                        '&:not(.disabled):hover': {
                            backgroundColor: '$backgroundPrimary',
                            color: '$colorPrimary',
                        },
                        '&.selected': {
                            backgroundColor: '$backgroundPrimary',
                            color: '$colorPrimary',
                        },
                        '&.disabled, &.disabled a': {
                            opacity: 0.5,
                            cursor: 'not-allowed',
                        },
                    }
                }
            }}
        >
            <ReactPaginate
                containerClassName="laundria-pagination-container"
                breakLabel="..."
                nextLabel={<CaretRightIcon />}
                onPageChange={(val) => {
                    onChange(val.selected);
                }}
                pageRangeDisplayed={5}
                pageCount={totalPage}
                previousLabel={<CaretLeftIcon />}
                renderOnZeroPageCount={null}
                forcePage={page}
            />
        </Box>
    );
}

export default Pagination;