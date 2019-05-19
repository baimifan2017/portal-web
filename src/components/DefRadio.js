import React, {Component} from 'react';
import { Radio } from 'antd';
const RadioGroup = Radio.Group;

const options = [
    { label: '大型企业', value: 'bigEnt' },
    { label: '中型企业', value: 'minEnt' },
    { label: '小型企业', value: 'smEnt' },
    { label: '微信企业', value: 'tinyEnt' },
];

class DefRadio extends Component {
    state = {
        value: 1,
    }

    onChange2 = (e) => {
        // console.log('radio2 checked', e.target.value);
        const {onChange} = this.props;
        onChange(e.target.value)
        this.setState({
            value2: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <RadioGroup options={options} onChange={this.onChange2} value={this.state.value2} />
            </div>
        );
    }
}

export default DefRadio;