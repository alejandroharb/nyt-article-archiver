import React from 'react';
import Button from './Button';

class ListRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = { key:""};
    }
    render() {
        return(
            <div className="row">
                <div className="list-group-item">    
                    <div  className="col-sm-9">
                        <h4>{this.props.headline}</h4>
                    </div>
                    <div className="col-sm-3">
                        <Button   
                            headline={this.props.headline}
                            date={this.props.date}
                            url={this.props.url}
                            articleId={this.props.articleId}
                            buttonAction={this.props.buttonAction}    
                            style={this.props.btnStyle}    
                            className="btn btn-success"
                            btnText={this.props.btnText}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = ListRow;