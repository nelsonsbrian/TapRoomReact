import React from 'react';
import PropTypes from 'prop-types';


function InventoryTable(props) {
    return (
        <tbody>
            <style jsx>{`
                td {
                    text-align: center;

                }
            `}</style>
            <tr>
                <th scope="row">1</th>
                <td>{props.name}</td>
                <td>{props.brewer}</td>
                <td>{props.price}</td>
                <td>{props.abv}</td>
                <td>{props.remaining}</td>
                <td><button onClick={props.handleSellPint} className="btn">Sell</button></td>
                <td><button className="btn">Edit</button></td>
            </tr>
        </tbody>
    );
}

InventoryTable.propTypes = {
    name: PropTypes.string.isRequired,
    brewer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    remaining: PropTypes.number.isRequired,
    handleSellPint: PropTypes.func.isRequired
    };

export default InventoryTable;
