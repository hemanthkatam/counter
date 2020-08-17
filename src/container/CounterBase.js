import React from 'react';
import Counter from '../components/Counter';
import Total from '../components/Total';

class CounterBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 },
            ]
        }
    }

    updateCounerValue = (id, operation) => {
        const { data } = this.state;
        const currentIdx = data.findIndex(ele => ele.id === id);
        if (operation === 'INC') {
            data[currentIdx].value += 1;
        } else {
            data[currentIdx].value -= 1;
        }
        this.setState({
            data
        })
    };

    render() {
        const { data } = this.state;
        const total = data.reduce((acc, ele) => acc + ele.value, 0)
        return (
            <React.Fragment>
                {
                    data.map((counter) => (
                        <Counter key={counter.id} id={counter.id} value={counter.value} updateCounerValue={this.updateCounerValue} />
                    ))
                }
                <Total total={total} />
            </React.Fragment>
        )
    }
}

export default CounterBase;