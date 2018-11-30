import React from 'react';
import { Switch, Route } from 'react-router-dom';
import InventoryTable from './InventoryTable';
import InventoryLow from './InventoryLow';

class BodyInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            masterKegList: [
                {
                    id: '1000',
                    name: 'Ruby Zozzle',
                    brewer: 'Hi-Wheel',
                    description: 'Sparkling Wine & Grapefruit',
                    abv: '6.8%',
                    price: '7',
                    remaining: 20
                },
                {
                    id: '1001',
                    name: 'Tart N Juicy',
                    brewer: 'Epic',
                    description: 'Sour IPA',
                    abv: '4.5%',
                    price: '6',
                    remaining: 60
                },
                {
                    id: '1002',
                    name: 'Hamm\'s',
                    brewer: 'Miller/Coors',
                    description: 'American Lager',
                    abv: '4.7%',
                    price: '3',
                    remaining: 65
                },
                {
                    id: '1003',
                    name: 'Prismatic',
                    brewer: 'Ninkasi',
                    description: 'Juicy IPA',
                    abv: '5.9%',
                    price: '6',
                    remaining: 75
                },
                {
                    id: '1004',
                    name: 'Juicy Haze',
                    brewer: 'New Belgium',
                    description: 'India Pale Ale',
                    abv: '7.5%',
                    price: '6',
                    remaining: 14
                },
                {
                    id: '1005',
                    name: '8 Hop',
                    brewer: 'New Belgium',
                    description: 'Pale Ale',
                    abv: '5.5%',
                    price: '6',
                    remaining: 58
                }
            ]
        }
        this.handleSellPint = this.handleSellPint.bind(this);
        this.handleReorderKeg = this.handleReorderKeg.bind(this);
    }

    handleReorderKeg(kegId) {
        console.log("reorder" + kegId);
        let kegListCopy = this.state.masterKegList.slice();
        for (let i = 0; i < kegListCopy.length; i++) {
            if (kegListCopy[i].id === kegId) {
                (kegListCopy[i].remaining < 16) ? kegListCopy[i].remaining += 124 : null;
                console.log(kegListCopy[i].remaining);
            }
        }
        this.setState({ masterKegList: kegListCopy })
    }
    handleSellPint(kegId) {
        let kegListCopy = this.state.masterKegList.slice();
        for (let i = 0; i < kegListCopy.length; i++) {
            if (kegListCopy[i].id === kegId) {
                (kegListCopy[i].remaining > 0) ? kegListCopy[i].remaining-- : null;
            }
        }
        this.setState({ masterKegList: kegListCopy })
    }

    render() {
        const lowKegList = this.state.masterKegList.filter(keg => (keg.remaining < 15));
        let showLowKegList = null;
        if (lowKegList.length > 0) {
            showLowKegList =
                <div className='lowDiv'>
                    {lowKegList.map((keg, index) => (
                        <InventoryLow name={keg.name}
                            brewer={keg.brewer}
                            description={keg.description}
                            abv={keg.abv}
                            price={keg.price}
                            remaining={keg.remaining}
                            key={index + 1}
                            handleReorderKeg={() => this.handleReorderKeg(keg.id)}
                        />
                    ))}
                </div>;
        }
        const inventoryKegList = this.state.masterKegList.filter(keg => (keg.remaining > 0));
        return (
            <div>
                <style jsx>{`
                th, h2 {
                    text-align: center;
                }
                .table, .lowDiv {
                    color: white;
                    background: rgba(0, 0, 0, 0.55);
                }
                h2 {
                    color: white;
                }
            `}</style>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Brewer</th>
                                <th scope="col">Price</th>
                                <th scope="col">AL%</th>
                                <th scope="col">Remaining (Pints)</th>
                                <th scope="col">Sell</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        {inventoryKegList.map((keg, index) => (
                            <InventoryTable name={keg.name}
                                brewer={keg.brewer}
                                description={keg.description}
                                abv={keg.abv}
                                price={keg.price}
                                remaining={keg.remaining}
                                key={index + 1}
                                handleSellPint={() => this.handleSellPint(keg.id)}
                            />
                        ))}
                    </table>
                </div>
                {(showLowKegList ? <h2>Low Inventory</h2> : null)}
                {showLowKegList}
            </div>
        );
    }
}

export default BodyInventory;

