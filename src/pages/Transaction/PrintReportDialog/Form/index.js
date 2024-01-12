import React, { useContext } from 'react';
import Button from '../../../../components/StyledButton';
import Datepicker from '../../../../components/Datepicker';
import Box from '../../../../components/Box';
import { useFormBusinessLogic } from './hooks';
import DialogContext from '../DialogContext';

const Form = () => {
    const { onClose } = useContext(DialogContext);
    const { onSubmit, onChange, formData } = useFormBusinessLogic();

    return (
        <React.Fragment>
            <form className="flex flex-col gap-4 mt-4" onSubmit={onSubmit}>
                <Box
                    className="gap-2"
                    css={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                    }}
                >
                    <div>
                        <Datepicker
                            label="Tanggal Awal"
                            required
                            onDateSelected={({ date }) => {
                                onChange('startDate', date);
                            }}
                            selected={formData.startDate}
                        />
                    </div>
                    <div>
                        <Datepicker
                            label="Tanggal Akhir"
                            required
                            onDateSelected={({ date }) => {
                                onChange('endDate', date);
                            }}
                            selected={formData.endDate}
                        />
                    </div>
                </Box>
                <div className="flex flex-row text-sm mt-1 justify-end gap-3 w-full">
                    <Button type="button" onClick={onClose}>Batal</Button>
                    <Button type="submit" variant="primary">Cetak</Button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default Form;