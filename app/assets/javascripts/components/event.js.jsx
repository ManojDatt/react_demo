var type=React.PropTypes
var Event=React.createClass(
{
propTypes:{
name:type.string,
event_date:type.string,
place:type.string,
description:type.string
},

render:function(){
var event=this.props.event;
return(
<tr>
	<td>{event.name}</td>
	<td>{event.event_date}</td>
	<td>{event.place}</td>
	<td>{event.description}</td>
</tr>
)
}
	
});