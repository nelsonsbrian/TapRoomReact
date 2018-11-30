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
            ]
        }
        this.handleSellPint = this.handleSellPint.bind(this);
    }

    handleSellPint(index) {
        let kegListCopy = this.state.masterKegList.slice();
        kegListCopy[index].remaining--;
        this.setState({masterKegList: kegListCopy})
        console.log("sell pint");
    }
    render() {

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
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brewer</th>
                                <th scope="col">Price</th>
                                <th scope="col">AL%</th>
                                <th scope="col">Remaining (Pints)</th>
                                <th scope="col">Sell</th>
                                <th scope="col">Edit</th>
                            </tr>
                        </thead>
                        {this.state.masterKegList.map((keg, index) => (
                            <InventoryTable name={keg.name}
                                brewer={keg.brewer}
                                description={keg.description}
                                abv={keg.abv}
                                price={keg.price}
                                remaining={keg.remaining}
                                key={index}
                                handleSellPint={() => this.handleSellPint(index)}
                            />
                        ))}
                    </table>
                </div>
                <div className='lowDiv'>
                    <h2>Low Inventory</h2>
                    {this.state.masterKegList.map((keg, index) => (
                        <InventoryLow name={keg.name}
                            brewer={keg.brewer}
                            description={keg.description}
                            abv={keg.abv}
                            price={keg.price}
                            remaining={keg.remaining}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default BodyInventory;

