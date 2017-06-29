import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {

	deleteItem(id){
		this.props.onDelete(id);
	}
	render() {
		let projectItem = this.props.projects.map( x => {
			return (
				<ProjectItem onDelete={this.deleteItem.bind(this)} key={x.id} projects={x} />
			)
		})
		return (
			<div className="Projects">
				<h1 className="Project-Title">Projects</h1>
				{projectItem}
			</div>
		)
	}
}

export default Projects;
