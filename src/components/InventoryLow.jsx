import React from 'react';
import PropTypes from 'prop-types';


function InventoryLow(props) {
    return (
        <div className="lowDiv">

            <style jsx>{`
                p {
                    text-align: center;
                    color: white;   
                    font-size: 30px;
                }

            `}</style>
            <p>
                {props.name} - {props.brewer} - {props.remaining} - <button>ReOrde </button>
                </p>
        </div>
    );
}


InventoryLow.propTypes = {
    name: PropTypes.string.isRequired,
    brewer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    remaining: PropTypes.string.isRequired
};

export default InventoryLow;