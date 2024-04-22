import React from 'react'
import Header from './Header'
import Table from './Table'
import ComponentContextProvider from './ComponentContextProvider'

const BaseList = React.forwardRef((props, ref) => (
    <ComponentContextProvider ref={ref} {...props}>
        <div className="bg-white rounded divide-y divide-solid">
            <Header />
            <div className="py-3">
                <Table />
            </div>
        </div>
    </ComponentContextProvider>
));

export default BaseList