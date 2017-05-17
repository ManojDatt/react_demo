var type=React.PropTypes
var Event=React.createClass(
{
propTypes:{
id: type.number,
name:type.string,
event_date:type.string,
place:type.string,
description:type.string,
image:type.string
},

render:function(){

var Img_styling ={ width: 30, heigth: 30 }
var event=this.props.event;
return(
<tr>
	<td>{event.name}</td>
	<td>{event.event_date}</td>
	<td>{event.place}</td>
	<td>{event.description}</td>
	<td><img src={event.image.url} style={Img_styling}></img></td>
	<td><EventDelete id={event.id} handleDelete={this.props.handleDelete} /></td>
</tr>
)
}

});
