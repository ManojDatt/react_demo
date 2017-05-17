var EventTable = React.createClass({
  render: function() {

  var events=[];
  this.props.events.forEach(function(event)
  {
  events.push(<Event event={event} key={'event'+event.id} handleDelete={this.props.handleDelete} />)}.bind(this)
  );
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-3">Place</th>
            <th className="col-md-4">Description</th>
            <th className="col-md-4">Images</th>
            <th className="col-md-4">Actions</th>
          </tr>
        </thead>
        <tbody>{events}</tbody>
      </table>
    )
  }
});
