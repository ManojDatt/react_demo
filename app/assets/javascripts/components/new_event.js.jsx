
var NewForm = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.instanceOf(Date),
    place: React.PropTypes.string,
    description: React.PropTypes.string,
  },
  getInitialState: function() {
    return {
      name: '',
      place: '',
      event_date: '',
      description: '',
      image: ''
    }
  },
  handleAdd: function(e) {
    e.preventDefault();
    console.log(this.state);

    if (this.validForm()) {
      var self = this;
      $.ajax({
        url: '/api/events',
        method: 'POST',
        data: { event: self.state },
        success: function(data) {
          self.props.handleAdd(data);
          self.setState(self.getInitialState());
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  },
  validForm: function() {
    if (this.state.name && this.state.place &&
        this.state.event_date && this.state.description) {
      return true;
    } else {
      return false;
    }
  },
  handleChange: function(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  },
  handleFile: function(e) {
    // Base64 converted
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = (upload) => {
      this.setState({
        image: upload.target.result,
        // filename: file.name,
        // filetype: file.type
        });
      };

      reader.readAsDataURL(file);
    },

  render: function() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="name"
                 placeholder="Name"
                 ref="name"
                 value={this.state.name}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="place"
                 placeholder="Place"
                 ref="place"
                 value={this.state.place}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="event_date"
                 placeholder="Event date"
                 ref="event_date"
                 value={this.state.event_date}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="description"
                 placeholder="Description"
                 ref="description"
                 value={this.state.description}
                 onChange={this.handleChange} />
        </div>

        <div className="form-group">
          <input type="file"
                 className="form-control"
                 name="image"
                 ref="image"
                 onChange={this.handleFile}
                 />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
});
