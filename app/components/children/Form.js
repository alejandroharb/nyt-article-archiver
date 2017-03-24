var React = require('react');
var helpers = require('../utils/helpers');
var moment = require('moment');
import Button from './Button';
import styles from './../styles/MainStyles';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            startDate: "",
            endDate: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        //     const newState = {};
        //    newState[event.target.id] = event.target.value;
        //     this.setState(newState);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        event.preventDefault();
        var formData = {
            searchTerm: this.state.searchTerm,
            start: moment(this.state.startDate).format('YYYYMMDD'),
            end: moment(this.state.endDate).format('YYYYMMDD')
        }
        this.props.setSearch(formData);
        this.setState({
            searchTerm: "",
            startDate: "",
            endDate: ""
        });
    }

    render() {
        return (
                <div className="row" >
                    <div className="col-sm-12" >
                        <div className="panel panel-primary" >
                            <div className="panel-heading" >
                                <h3 className="panel-title text-center" >
                                    Search
                                </h3>
                            </div>
                            <div className="panel-body" >
                                <form onSubmit={this.handleSubmit} >
                                    <div className="form-group" >
                                        <h1 className="center" >
                                            <strong > Topic
                                                </strong>
                                        </h1>
                                        <input value={this.state.searchTerm}
                                            type="text"
                                            className="form-control text-center"
                                            name="searchTerm"
                                            onChange={this.handleChange}
                                        />
                                        <br />
                                        <h1 className="center" >
                                            <strong >
                                                Start Year
                                            </strong>
                                        </h1>
                                        <input
                                            value={this.state.startDate}
                                            name="startDate"
                                            className="form-control text-center"
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                        <br />
                                        <h1 className="center" >
                                            <strong > End Year
                                            </strong>
                                        </h1>
                                        <input
                                            value={this.state.endDate}
                                            name="endDate"
                                            className="form-control text-center"
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                        <Button
                                        style={styles.submitBtnStyle}  
                                        type="submit"
                                        btnText="Submit"
                                            />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Form;