import React from 'react';
import Search from './Search';


class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <Search />
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Main;