import React from "react";
import { Table } from 'react-bootstrap';

function Tables() {
    return (
        <Table responsive size="sm" className='table-lang'>
            <tbody>
                <tr>
                    <th>THAI</th>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <th>ENGLISH</th>
                    <td>75%</td>
                    <td>60%</td>
                    <td>70%</td>
                    <td>70%</td>
                </tr>
                <tr>
                    <th>JAPANESE (N5)</th>
                    <td>40%</td>
                    <td>40%</td>
                    <td>40%</td>
                    <td>40%</td>
                </tr>

            </tbody>
        </Table>
    );
}
export default Tables;