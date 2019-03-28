import React, { Component } from "react";
import ReactModal from "react-modal";
import CreatableSelect from "react-select/lib/Creatable";

class AssignCandidateSkillsModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false,
			candidateSkills: this.props.candidateSkills,
			approvedSkills: this.props.approvedSkills,
			value: []
		};

		this.assignApprovedSkill = this.assignApprovedSkill.bind(this);
		this.assignNewSkill = this.assignNewSkill.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.storeSkills = this.storeSkills.bind(this);
	}

	toggleModal() {
		this.setState({ ...this.state, showModal: !this.state.showModal });
	}

	storeSkills(candidateSkills) {
		this.props.assignCandidateSkill(candidateSkills);
		this.setState({ ...this.state, value: [] });
	}

	assignApprovedSkill(approvedSkill) {
		const { candidateSkills, approvedSkills } = this.state;
		this.setState({
			...this.state,
			candidateSkills: [
				...candidateSkills,
				approvedSkills.find(
					skill =>
						skill.name ===
						approvedSkill[approvedSkill.length - 1].value
				)
			],
			value: approvedSkill
		});
	}
	// the id calculation is because no backend returns id value of the record!
	assignNewSkill(newSkill) {
		const { candidateSkills, approvedSkills, value } = this.state;
		candidateSkills.push({
			id:
				candidateSkills.reduce((prev, current) => {
					return prev.id > current.id ? prev : current;
				}).id + 10,
			name: newSkill
		});
		this.setState({
			...this.state,
			candidateSkills: candidateSkills,
			value: [...value, { label: newSkill, value: newSkill }]
		});
	}

	approvedSkills() {
		const { candidateSkills, approvedSkills } = this.props;
		return approvedSkills
			.filter(
				approvedSkill =>
					candidateSkills.filter(
						candidateSkill => approvedSkill.id === candidateSkill.id
					).length === 0
			)
			.map(approvedSkill => ({
				label: approvedSkill.name,
				value: approvedSkill.name
			}));
	}

	//should query backend to store the skill for the candidate
	//currently it only stores it in the state.
	render() {
		const { showModal, value, candidateSkills } = this.state;
		return (
			<section>
				<h2>Skills</h2>
				<button onClick={() => this.toggleModal()}>
					Add new skill
				</button>
				<ReactModal
					isOpen={this.state.showModal}
					contentLabel="Add your skill"
				>
					<CreatableSelect
						isMulti
						isClearable
						onChange={this.assignApprovedSkill}
						onCreateOption={this.assignNewSkill}
						options={this.approvedSkills()}
						value={value}
					/>
					<button onClick={() => this.storeSkills(candidateSkills)}>
						Save
					</button>
					<button onClick={() => this.toggleModal()}>Exit</button>
				</ReactModal>
			</section>
		);
	}
}

export default AssignCandidateSkillsModal;
