import React from 'react';
import helpers from './utils/helpers';
import ListRow from './children/ListRow';
import styles from './styles/MainStyles';

export default class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleData = this.handleData.bind(this);
    }
    componentDidMount() {
        var that = this
        helpers.getArticles().then(function (response) {
            const data = response.data
            that.handleData(data)
        })
    }
    handleData(data) {
        this.setState({ articles: data });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-primary" >
                            <div className="panel-heading" >
                                <h3 className="panel-title text-center" >
                                    Saved
                                </h3>
                            </div>
                            <div className="panel-body list-group" >
                                {this.state.articles.map(function (article, i) {
                                    return (
                                        <ListRow
                                            btnStyle={styles.deleteBtnStyle}    
                                            btnText="Delete"    
                                            buttonAction="delete"
                                            key={i.toString()}
                                            headline={article.title}
                                            date={article.date}
                                            url={article.url}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>    
            </div>    
        );
    }
}