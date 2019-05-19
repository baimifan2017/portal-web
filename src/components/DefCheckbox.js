import React, {Component} from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;



//     this.props.options:[
//     { label: '科技型企业', value: 'Apple' },
//     { label: '高新技术企业', value: 'Pear' },
//     { label: '军民融合企业', value: 'Orange' },
//
//     { label: '新型农村经营主体', value: 'Apple1' },
//     { label: '涉农企业', value: 'Pear1' },
//     { label: '中小型企业', value: 'Orange1' },
// ];

class DefCheckbox extends Component {
    onChange=(checkedValues)=> {
        const { onChange } = this.props
        onChange(checkedValues)
    }

    render() {
        let options = this.props.options
        return (
            <div>
                <CheckboxGroup options={options} defaultValue={this.props.defaultValue||''} onChange={this.onChange} />
            </div>
        );
    }
}

export default DefCheckbox;