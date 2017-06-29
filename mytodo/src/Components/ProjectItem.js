import React, { Component } from 'react';

class ProjectItem extends Component {

	deleteItem(id){
		this.props.onDelete(id)
	}
	render() {
		return (
			<li className="Project-Items">
				<span className="remove" onClick={this.deleteItem.bind(this, this.props.projects.id)}>
				<strong> - {this.props.projects.title}</strong>: {this.props.projects.category}
				</span>
			</li>
		)
	}
}

export default ProjectItem;
