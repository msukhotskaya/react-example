import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Messages extends Component {
    
    static propTypes = {
        messages: PropTypes.array.isRequired
    };

    
    render() {
        return (
            <div>
                {
                    this.props.messages.map((message, index) => (
                        <p key={`message-${index}`}>{message}</p>
                    ))
                }
            </div>
        );
    }
}
