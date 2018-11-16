import React from 'react';
import PropTypes from 'prop-types';


function InventoryTable(props){
    return (
    //     <div className="tableDiv">
    //   Table
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>{props.name}</td>
                    <td>{props.brewer}</td>
                    <td>{props.price}</td>
                    <td>{props.alc}</td>
                    <td>{props.remaining}</td>
                    <td><button className="btn">Sell</button></td>
                    <td><button className="btn">Edit</button></td>
                </tr>
            </tbody>
        // </div>
    );
}

InventoryTable.propTypes = {
    name: PropTypes.string.isRequired,
    brewer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    remaining: PropTypes.string.isRequired
};

export default InventoryTable;
