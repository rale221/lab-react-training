import { lang } from 'moment';
import React, { Children, Component } from 'react';

class Greetings extends Component {
    render() {
        const { lang, children } = this.props;
        return (
            <div>
                <div>Language is : {lang}</div>
                <div>Children is : {children}</div>
            </div>
        );
    }
}

export default Greetings;