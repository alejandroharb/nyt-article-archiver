import React from 'react';
import ListRow from './children/ListRow';
import styles from './styles/MainStyles';

class Results extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return(
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="text-center panel-title">Results</h3>
                            </div>
                            <div className="panel-body list-group">
                                {this.props.results.map(function(article, i) {
                                    return(
                                        <ListRow 
                                            buttonAction="save"    
                                            key={i.toString()}
                                            headline={article.headline.main}
                                            date={article.pub_date}
                                            url={article.web_url}
                                            btnText="Save"
                                            btnStyle={styles.saveBtnStyle}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

module.exports = Results;