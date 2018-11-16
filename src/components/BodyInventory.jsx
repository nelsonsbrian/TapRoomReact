import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InventoryTable from './InventoryTable';

function BodyInventory() {
    var styles = {
    };
    return (
        <div style={styles}>
            Inventory
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Brewer</th>
                        <th scope="col">Price</th>
                        <th scope="col">AL%</th>
                        <th scope="col">Remaining</th>
                        <th scope="col">Sell</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                {masterKegList.map((keg, index) => (
                    <InventoryTable name={keg.name}
                        brewer={keg.brewer}
                        description={keg.description}
                        abv={keg.abv}
                        price={keg.price}
                        remaining={keg.remaining}
                        key={index}
                    />
                ))}
            </table>
        </div>
    );
}

export default BodyInventory;

const masterKegList = [
    {
        name: 'Ruby Zozzle',
        brewer: 'Hi-Wheel',
        description: 'Sparkling Wine & Grapefruit',
        abv: '6.8%',
        price: '7',
        remaining: '20'
    },
    {
        name: 'Tart N Juicy',
        brewer: 'Epic',
        description: 'Sour IPA',
        abv: '4.5%',
        price: '6',
        remaining: '60'
    },
    {
        name: 'Hamm\'s',
        brewer: 'Miller/Coors',
        description: 'American Lager',
        abv: '4.7%',
        price: '3',
        remaining: '65'
    },
    {
        name: 'Prismatic',
        brewer: 'Ninkasi',
        description: 'Juicy IPA',
        abv: '5.9%',
        price: '6',
        remaining: '75'
    },
    {
        name: 'Juicy Haze',
        brewer: 'New Belgium',
        description: 'India Pale Ale',
        abv: '7.5%',
        price: '6',
        remaining: '18'
    },
    {
        name: '8 Hop',
        brewer: 'New Belgium',
        description: 'Pale Ale',
        abv: '5.5%',
        price: '6',
        remaining: '58'
    }
];