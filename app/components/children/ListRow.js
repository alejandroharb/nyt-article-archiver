import React from 'react';
import helpers from './../utils/helpers';

class ListRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { key:""};

        this.saveArticle = this.saveArticle.bind(this);
    }
    saveArticle(e) {
        const title = this.props.headline;
        const date = this.props.date;
        const url = this.props.url;
        const data = {
            title: title,
            date: date,
            url: url
        }
        helpers.saveArticleData(data).then(function(response) {
            console.log(response)
        })
    }
    render() {
        return(
            <div className="row">
                <div  className="col-sm-9">
                    <h4>{this.props.headline}</h4>
                </div>
                <div className="col-sm-3">
                    <button 
                        onClick={this.saveArticle}
                        className="btn btn-success" >
                        Save
                    </button>
                </div>
            </div>
        )
    }
}

module.exports = ListRow;