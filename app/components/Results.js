import React from 'react';
import ListRow from './children/ListRow';

class Results extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="text-center panel-title">Results</h3>
                            </div>
                            <div className="panel-body">
                                <div className="container">
                                    
                                        {this.props.results.map(function(article, i) {
                                            return(
                                                <ListRow 
                                                    key={i.toString()}
                                                    headline={article.headline.main}
                                                />
                                            );
                                        })}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Results;