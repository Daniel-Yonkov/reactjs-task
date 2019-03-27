import React, { Component } from "react";
import AssignedSkills from "./AssignedSkills";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			backendCandidateSkills: [
				{ id: 1, name: "ReactJS" },
				{ id: 2, name: "NodeJS" },
				{ id: 3, name: "Back-End" }
			],
			backendApprovedSkills: [
				{ id: 1, name: "ReactJS" },
				{ id: 2, name: "NodeJS" },
				{ id: 3, name: "PHP" }
			]
		};
		this.removeSkill = this.removeSkill.bind(this);
	}

	showSkillModal() {
		this.setState({ ...this.state, showModal: true });
	}

	removeSkill(id) {
		const candidateSkills = this.state.backendCandidateSkills;
		this.setState({
			...this.state,
			backendCandidateSkills: candidateSkills.filter(
				skill => skill.id !== id
			)
		});
	}

	render() {
		return (
			<div>
				<section>
					<h2>Skills</h2>
					<button onClick={() => this.showSkillModal()}>
						Add new skill
					</button>
				</section>
				{this.state.backendCandidateSkills.length > 0 &&
					this.state.backendCandidateSkills.map(skill => (
						<AssignedSkills
							key={skill.id}
							skill={skill}
							removeSkill={() => this.removeSkill(skill.id)}
						/>
					))}
			</div>
		);
	}
}

export default App;
