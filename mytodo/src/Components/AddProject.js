import React, { Component } from 'react';
import uuid from 'uuid';
class AddProject extends Component {

	constructor(){
		super();
		this.state = {
			newProject: {}
		}
	}

	static defaultProps = {
		projectOptions: ['Web Design', 'Web Development', 'Mobile Development']
	}

	getValues(e){
		if(this.refs.title.value === ""){
			alert('The title is required');
		} else {
			this.setState({newProject:{
				id: uuid.v4(),
				title: this.refs.title.value,
				category: this.refs.category.value
			}}, () => {
				this.props.grabValues(this.state.newProject)
			})
		}
		e.preventDefault();
	}

	render() {
		let projectOptions = this.props.projectOptions.map( a => {
			return (
				<option key={a} value={a}>{a}</option>
			)
		})

		return (
			<div>
				<h2>Add Project</h2>
				<form onSubmit={this.getValues.bind(this)}>
					<div>
						<label>Title</label>
						<input type="text" ref="title"/>
					</div>

					<div>
						<label>Category</label>
						<select ref="category">
							{projectOptions}
						</select>
					</div>

					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddProject;
