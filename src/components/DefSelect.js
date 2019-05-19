import React, {Component} from 'react';
import { Select } from 'antd';

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}


class DefSelect extends Component {

    render() {
        const options = this.props.options;
        return (
            <div>
                <Select defaultValue="" style={{ width: '100%' }} onChange={handleChange}>
                    {options}


                </Select>
            </div>
        );
    }
}

export default DefSelect;