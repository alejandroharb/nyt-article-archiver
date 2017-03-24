import React from 'react';
import Search from './Search';
import Saved from './Saved';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <Saved />
            </div>
        );
    }
}

module.exports = Main;