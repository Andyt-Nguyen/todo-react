import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			projects: []
		}
	}

	componentWillMount(){

		this.setState({projects:[
				{
					id: uuid.v4(),
					title: 'Bussiness Website',
					category: 'Web Design'
				},
				{
					id: uuid.v4(),
					title: 'Social App',
					category: 'Mobile Development'
				},
				{
					id: uuid.v4(),
					title: 'Shopping Cart',
					category: 'Web Development'
				}
			]
		})
	}

	getValues(project){
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects:projects});
	}

	handleDelete(id){
		let projects = this.state.projects;
		let indexProj = projects.findIndex( a => a.id === id);
		projects.splice(indexProj, 1);
		this.setState({projects:projects});
	}

  render() {
    return (
      <div className="App">
				<Projects onDelete={this.handleDelete.bind(this)} projects={this.state.projects} />
				<AddProject grabValues={this.getValues.bind(this)} />
      </div>
    );
  }
}

export default App;
