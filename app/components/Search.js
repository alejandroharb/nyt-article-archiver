var React = require('react');

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "Enter here"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value })
        console.log(this.state.searchTerm);

    }

    handleSubmit(event) {
        event.preventDefault();
        // this.props.setState( this.state.searchTerm );
        // this.props.startDate(this.state.startDate);
        console.log(this.state.searchTerm);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title text-center">Search</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <h1 className="center">
                                            <strong>Topic</strong>
                                        </h1>
                                        <input
                                            value={this.state.searchTerm}
                                            type="text"
                                            className="form-control text-center"
                                            id="searchTerm"
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <br />
                                        <h1 className="center">
                                            <strong>Start Year</strong>
                                        </h1>
                                        <input
                                            value={this.state.startDate}
                                            id="startDate"
                                            className="form-control text-center"
                                            type="text"
                                            onChange={this.handleChange}
                                        />
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;