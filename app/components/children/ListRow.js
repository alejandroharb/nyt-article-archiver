import React from 'react';

class ListRow extends React.Component {
    saveArticle() {
        console.log("saving article!")
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