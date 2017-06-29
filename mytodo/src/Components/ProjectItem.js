import React, { Component } from 'react';

class ProjectItem extends Component {

	deleteItem(id){
		this.props.onDelete(id)
	}
	render() {
		return (
			<li>
				<strong>{this.props.projects.title}</strong>: {this.props.projects.category}
				<a href="#" onClick={this.deleteItem.bind(this, this.props.projects.id)}> X </a>
			</li>
		)
	}
}

export default ProjectItem;
