import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class MessageInput extends Component {
    
    static propTypes = {
        onAddMessage: PropTypes.func.isRequired
    };

    
    state = {};

    
    handleAddMessage(message) {
        this.setState({
            message: null
        }, () => this.props.onAddMessage(message));
    }

    
    render() {
        return (
            <div>
                <input value={this.state.message || ''} onChange={e => this.setState({message: e.target.value})} />
                <button onClick={() => this.handleAddMessage(this.state.message)}>Send</button>
            </div>
        );
    }
}
