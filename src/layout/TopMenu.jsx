import React, { Component } from 'react'
import { AutoComplete } from 'primereact/autocomplete';
export default class TopMenu extends Component {
    render() {
        return (
            <div className='top-menu'>
                <div className="p-fluid p-grid p-col-12 p-justify-end">
                    <div className='p-col-9 p-md-6 p-lg-4 p-xl-3'>
                        <div className='p-inputgroup'></div>
                        <AutoComplete
                            placeholder="Buscar.."
                            inputStyle={{
                                borderRadius: '15px',
                                fontSize: '15px'
                            }}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
