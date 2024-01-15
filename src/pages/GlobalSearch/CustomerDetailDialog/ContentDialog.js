import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent, DialogTitle, CloseButton
} from '../../../components/StyledDialog';
import PageContext from '../PageContext';
import Box from '../../../components/Box';

const ContentDialog = ({ isOpen, onClose }) => {
    const { customerDetailData } = useContext(PageContext);

    if (!customerDetailData) return null;

    return (
        <Dialog open={isOpen}>
            <DialogContent>
                <DialogTitle>Detail Data</DialogTitle>
                <CloseButton onClick={onClose} />
                <Box className="flex flex-col gap-4 mt-4">
                    <Box>
                        <Box className='text-sm font-semibold'>Nama Lengkap</Box>
                        <Box>{customerDetailData.fullname}</Box>
                    </Box>
                    <Box>
                        <Box className='text-sm font-semibold'>Alamat</Box>
                        <Box>{customerDetailData.addr}</Box>
                    </Box>
                    <Box>
                        <Box className='text-sm font-semibold'>No. Telepon</Box>
                        <Box>{customerDetailData.phone}</Box>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default ContentDialog