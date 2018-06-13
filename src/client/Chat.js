import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Messages from './Messages';
import MessageInput from './MessageInput';


export default class Chat extends Component {
    
    state = {
        messages: []
    };


    handleAddMessage(message) {
        this.setState({
            messages: this.state.messages.concat([message])
        });
    }

    
    render() {
        return (
            <div>
                <Messages messages={this.state.messages} />
                <MessageInput onAddMessage={::this.handleAddMessage} />
            </div>
        );
    }
}
