var EventDelete = React.createClass({
  propTypes: {
    id: React.PropTypes.number
  },
  handleDelete: function(){
    console.log(this.props.handleDelete);
    var confrm = confirm("Are you sure ?");
    if(confrm==true){
      $.ajax({
          url: '/api/events/'+ this.props.id,
          method: 'DELETE',
          success: function(data) {

              this.props.handleDelete(data);
              // this.setState({events: this.props.handleDelete});
          },
          error: function(xhr, status, error) {
              alert('Delete error.', status, xhr, error);
          }
      });
    }

  },
  render: function() {
    return (
      <div>
        <div><button type='button' className="btn btn-danger" onClick={this.handleDelete} >Delete</button></div>
      </div>
    );
  }
});
