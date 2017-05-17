var EventFilter = React.createClass({


  handleFilter: function(){
    var name = ReactDOM.findDOMNode(this.refs.name).value;
    var place = ReactDOM.findDOMNode(this.refs.place).value;
    var self = this;
    $.ajax({
        url: '/api/events/filter',
        data: { name: name, place: place },
        success: function(data) {
            self.props.handleFilter(data);
        },
        error: function(xhr, status, error) {
            alert('Search error.', status, xhr, error);
        }
    });
  },
  render: function() {
    return (
      <div className="col-md-12">
        <div className="col-md-4"> <input onChange={this.handleFilter} type='text' className='form-control' placeholder='Filter by Events Name' ref='name'/></div>
        <div className="col-md-4"> <input onChange={this.handleFilter} type='text' className='form-control' placeholder='Filter by Events Place' ref='place'/></div>
      </div>
    );
  }
});
