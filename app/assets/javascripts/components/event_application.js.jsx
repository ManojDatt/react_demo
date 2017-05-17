var EventApplication = React.createClass({
  getInitialState: function() {
    return { events: [] };
  },
  componentDidMount: function() {
    this.getDataFromApi();
  },
  getDataFromApi: function() {
    var self = this;
      $.ajax({
        url: '/api/events',
        success: function(data) {
          self.setState({ events: data });
        },
        error: function(xhr, status, error) {
          alert('Cannot get data from API: ', error);
        }
      });

  },
  handleSearch: function(events) {
    this.setState({ events: events });
	},

	handleAdd: function(event) {
    var events = this.state.events;
    events.push(event);
    this.setState({ events: events });
	},
  handleFilter: function(events) {
    this.setState({ events: events });
  },
  handleDelete: function(events) {
    //324324
    this.setState({ events: events });
  },

  render: function() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>React Based -Event Records</h1>
        </div>
        <div className="row">
        <div className="col-md-4">
          <SearchEvent handleSearch={this.handleSearch} />
        </div>
        <div className="col-md-8">
          <EventFilter handleFilter={this.handleFilter} />
        </div>
        </div>
        <p>&nbsp;</p>
        <div className="row">
        <div className="col-md-12">

          <NewForm handleAdd={this.handleAdd} />
		</div>
		</div>
        <div className="row">
          <div className="col-md-12">
            <EventTable events={this.state.events} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    )
}
});
