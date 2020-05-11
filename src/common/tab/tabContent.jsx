import React, { Component } from 'react';
import { binActionCreators } from 'redux';
import { connect } from 'react-redux';

import IF from '../operator/IF';

class TabContent extends Component {

    render() {
        const visible = this.props.tab.visible[this.props.id]

        const selected = this.props.tab.selected === this.props.id;
        return (
            <IF test={visible} >
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </IF>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab });
export default connect(mapStateToProps)(TabContent);