import React from 'react';
import helpers from './../utils/helpers';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.saveArticle = this.saveArticle.bind(this);
        this.handleAction = this.handleAction.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }
    handleAction() {
        const data = {
            title: this.props.headline,
            date: this.props.date,
            url: this.props.url,
            id: this.props.articleId
        }
        const buttonAction = this.props.buttonAction
        switch (this.props.buttonAction) {
            case "save":
                return this.saveArticle(data);
            case "delete":
                return this.deleteArticle(data.id);    
        }
    }
    saveArticle(data) {        
        helpers.saveArticleData(data).then(function (response) {
        })
    }
    deleteArticle(data) {
        helpers.deleteArticleData(data).then(function (response) {
        })
    }
    render() {
        return (
            <button  
                onClick={this.handleAction}    
                style={this.props.style}    
                className="btn"
            >
                {this.props.btnText}    
            </button>    
        );
    }
}

module.exports = Button;