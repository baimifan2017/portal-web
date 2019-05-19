import React, {Component} from 'react';
import {
    Upload, message, Button, Icon,
} from 'antd';



class DefUpload extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {uploadResults} = this.props;
        const props = {
            name: 'file',
            action:this.props.action,
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} 文件上传成功`);
                    uploadResults()
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} 文件上传失败`);
                }
            },
        };
        return (
            <Upload {...props}>
                <Button style={{width:'16.5vw'}}>
                    <Icon type="upload" /> 营业执照上传
                </Button>
            </Upload>
        );
    }
}

export default DefUpload;