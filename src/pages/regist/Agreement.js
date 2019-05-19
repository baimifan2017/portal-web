import React, {Component} from 'react';
import {Card} from 'antd'
// 绵阳中小企业融资服务网协议
class Agreement extends Component {
    render() {
        return (
            <div className={'agreement'}>
                <Card title="绵阳市中小企业融资服务网服务协议" bordered={false} style={{width:"100%",height:"450px",overflowY:"scroll"}}>
                    <p>(试行)</p>
                    <p className={'agreementContent'}>
                        欢迎注册和使用绵阳市中小企业融资服务网（以下简称“绵荟融通”），该网站由绵阳市人民政府主导，市经信委、人行绵阳市中心支行、市发改委、市政府金融办、市工商局、市科知局、市财政局、市税务局等部门共建，旨在为企业提供在线融资对接及其他服务。本协议明确了金融机构、中小微企业和政府部门（以下简称“用户”）使用网站服务应遵守的条款和条件。
                    </p>
                    <p className={'agreementTitle'}>
                        1. 概述
                    </p>
                    <p className={'agreementContent'}>用户使用网站服务前，应阅读、同意并接受本协议中所含的所有条款和条件，按照本协议的规定完成在线注册，成为注册用户。用户一经注册成功即视为对本协议全部条款已充分理解并完全接受。</p>
                    <p className={'agreementTitle'}>2. 用户权利及义务</p>
                    <p className={'agreementContent'}> 2.1 注册用户享有发布融资需求、公示融资产品、在线融资对接等网上融资服务。</p>
                    <p className={'agreementContent'}> 2.2 用户必须根据网站要求提供真实、有效、完整的信息资料。用户有义务维持并更新用户资料，确保其为真实、有效、完整的用户最新资料。网站不对信息资料真实性及由其产生的后果承担任何责任。</p>
                    <p className={'agreementContent'}> 2.3 若用户提供错误、虚假、过时或不完整的信息资料，或者网站依其独立判断怀疑信息资料为错误、虚假、过时或不完整，网站有权暂停或终止用户的账户，并拒绝用户使用网站部分或全部功能。</p>
                    <p className={'agreementContent'}>2.4 用户在本网站签订本协议，即授权“绵荟融通”可采集用户在网站上传、录入和交易产生的各种信息，在不违反法律法规的前提下，有权使用通过网站采集的各种信息。</p>
                    <p className={'agreementContent'}> 2.5 用户被本网站暂停、终止或其它原因不使用本网站服务时，不得要求本网站删除其上传、录入和交易产生的各种信息。</p>
                    <p className={'agreementTitle'}>4. 网站安全</p>
                    <p className={'agreementContent'}>4.1 用户注册成为本网站用户后，不得将网站用户转让给第三方或者授权给任何第三方使用。用户在本网站的一切操作行为自行承担法律后果。</p>
                    <p className={'agreementContent'}>4.2 用户应自行保证其账户及使用安全，并对其账户及其使用承担全部责任。</p>
                    <p className={'agreementContent'}>4.3 本网站提供密码验证作为识别用户身份的方式，用户须自行保证密码的安全性。用户在本网站进行的任何操作均视为用户自身的行为。</p>
                    <p className={'agreementContent'}>  4.4 因用户导致的任何损失由用户自行承担，包括但不限于：决策失误、操作不当、遗忘或泄露密码、密码被他人破解、用户使用的计算机系统被第三方侵入而造成的损失。</p>
                    <p className={'agreementTitle'}>  5. 隐私保护</p>
                    <p className={'agreementContent'}>本网站依法依规保护用户的隐私。</p>
                    <p className={'agreementTitle'}>6. 违约责任</p>
                    <p className={'agreementContent'}> 用户同意保障和维护网站及其他用户的权益，如因用户违反有关法律、法规或本协议项下任何条款而给网站或其他第三方造成损失，用户同意承担由此造成的损害赔偿责任。</p>
                    <p className={'agreementTitle'}>  7. 免责声明</p>
                    <p className={'agreementContent'}>   7.1 在法律允许的最大范围内，网站不会对用户提供任何保证，不论是明示的或默示的。同时，网站不担保所提供的产品和服务一定能满足用户的要求，也不担保提供的服务不会被中断，并且对产品和服务的及时性、安全性、出错发生，以及信息是否能准确、及时、顺利的传送均不作任何担保。网站不就因用户使用网站的产品和服务引起的，或在任何方面与网站的产品和服务有关的任何意外的、非直接的、特殊的、或间接的损害或请求承担任何责任。</p>
                    <p className={'agreementContent'}>  7.2 网站的信息发布者包括市级政府部门、辖区金融机构、企业注册用户。信息发布者应遵守国家法律法规，确保所发布的信息真实有效，并承担因信息发布产生的各项责任；网站不对信息发布者的信息真实性负责。</p>
                    <p className={'agreementTitle'}>8. 法律管辖</p>
                    <p className={'agreementContent'}>  本产品和服务相关规范的解释及适用，以及用户因使用网站而产生的权利义务关系，应适用中华人民共和国法律。如果本协议的任何内容与法律相抵触，应以法律规定为准。</p>
                    <p className={'agreementTitle'}>9. 其他规定</p>
                    <p className={'agreementContent'}>9.1 如本协议中的任何内容无论因何种原因完全或部分无效或不具有执行力，本协议的其余内容仍应有效并且对协议各方有约束力。</p>
                    <p className={'agreementContent'}>  9.2 本网站运营管理机构有权在必要时修改服务条款，网站服务条款一旦发生变动，将会在网站公布修改后的服务条款。如果不同意所改动的内容，用户可以主动放弃网站服务。如果用户继续享用网站服务，则视为接受服务条款的变动。网站运营管理机构保留随时修改或中断服务而不需知照用户的权利。网站运营管理机构行使修改或中断服务的权利，不需对用户或第三方负责。</p>
                    <p className={'agreementContent'}>  9.3 本网站运营管理机构拥有对本协议的解释权</p>


                </Card>
            </div>
        );
    }
}

export default Agreement;