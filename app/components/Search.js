var React = require('react');
var helpers = require('./utils/helpers');
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "Enter here",
            startDate: "ex: 10/01/2000",
            endDate: "ex: 10/01/2000"
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
        const query = "&?q=" + this.state.searchTerm;
        const startDate = "?begin_date=" + this.state.startDate;
        const endDate = "?end_date=" + this.state.endDate;
        console.log(this.state.searchTerm);
        console.log(this.state.startDate);
        helpers.runAPI(query, startDate, endDate).then(function(data) {
            console.log(data);
        })
       
    }

    render() {
        return ( <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "col-sm-12" >
            <
            div className = "panel panel-default" >
            <
            div className = "panel-heading" >
            <
            h3 className = "panel-title text-center" > Search < /h3> <
            /div> <
            div className = "panel-body" >
            <
            form onSubmit = {
                this.handleSubmit
            } >
            <
            div className = "form-group" >
            <
            h1 className = "center" >
            <
            strong > Topic < /strong> <
            /h1> <
            input value = {
                this.state.searchTerm
            }
            type = "text"
            className = "form-control text-center"
            name = "searchTerm"
            onChange = {
                this.handleChange
            }

            /> <
            br / >
            <
            h1 className = "center" >
            <
            strong > Start Year < /strong> <
            /h1> <
            input value = {
                this.state.startDate
            }
            name = "startDate"
            className = "form-control text-center"
            type = "text"
            onChange = {
                this.handleChange
            }
            /> <
            br / >
            <
            h1 className = "center" >
            <
            strong > End Year < /strong> <
            /h1> <
            input value = {
                this.state.endDate
            }
            name = "endDate"
            className = "form-control text-center"
            type = "text"
            onChange = {
                this.handleChange
            }
            /> <
            button className = "btn btn-primary"
            type = "submit" >
            Submit <
            /button> <
            /div> <
            /form> <
            /div> <
            /div> <
            /div> <
            /div> <
            /div>
        )
    }
}

export default Search;