import React, { Component } from "react";
import AssignedSkills from "./AssignedSkills";
import AssignCandidateSkillsModal from "./AssignCandidateSkillsModal";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backendCandidateSkills: [
				{ id: 1, name: "ReactJS" },
				{ id: 2, name: "NodeJS" },
				{ id: 3, name: "Back-End" }
			],
			backendApprovedSkills: [
				{ id: 1, name: "ReactJS" },
				{ id: 2, name: "NodeJS" },
				{ id: 4, name: "PHP" }
			]
		};
		this.removeSkill = this.removeSkill.bind(this);
		this.assignCandidateSkill = this.assignCandidateSkill.bind(this);
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
	//should query backend to store the skill for the candidate
	//currently it only stores it in the state.
	assignCandidateSkill(skills) {
		this.setState({
			...this.state,
			backendCandidateSkills: skills
		});
	}

	render() {
		return (
			<div>
				<AssignCandidateSkillsModal
					candidateSkills={this.state.backendCandidateSkills}
					approvedSkills={this.state.backendApprovedSkills}
					assignCandidateSkill={this.assignCandidateSkill}
				/>
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
