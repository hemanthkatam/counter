import React from 'react';

const Counter = ({ id, value, updateCounerValue }) => (
    <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
            <button className="button is-danger is-small" onClick={() => updateCounerValue(id, 'DEC')}>-</button>
            <button className="button is-success is-small" onClick={() => updateCounerValue(id, 'INC')}>+</button>
        </div>
    </div>
)

export default Counter;
