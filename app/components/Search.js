var React = require('react');
import Form from './children/Form';
import helpers from './utils/helpers';
var Results = require('./Results');
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            startDate: "",
            endDate: "",
            results:[]
        }

        this.setSearch = this.setSearch.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
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
        var that = this;
        helpers.runAPI(query, startDate, endDate).then(function (res) {
            console.log(res.data.response.docs);
            that.setState({results: res.data.response.docs})
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
            <div className="container">
                <div className="row">
                    <Form setSearch={this.setSearch} />
                    <Results results={this.state.results} />
                </div>
            </div>
               
        );
    }
}

module.exports = Search;