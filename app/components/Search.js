var React = require('react');
import Form from './children/Form';
import helpers from './utils/helpers';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            startDate: "",
            endDate: ""
        }

        this.setSearch = this.setSearch.bind(this);
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }
    componentDidUpdate() {
        //to go to main component for querying api----
        const query = "&?q=" + this.state.searchTerm;
        const startDate = "?begin_date=" + this.state.startDate;
        const endDate = "?end_date=" + this.state.endDate;
        helpers.runAPI(query, startDate, endDate).then(function (data) {
            console.log(data);
        });
        //============
    }
    setSearch(formData) {
        console.log("====formData====")
        console.log(formData)
        this.setState({
            searchTerm: formData.searchTerm,
            startDate: formData.start,
            endDate: formData.end
        });
        
    }
    render() {
        return (
            <Form setSearch={this.setSearch} />
        );
    }
}

module.exports = Main;