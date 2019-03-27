import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
class AssignedSkills extends Component {
	render() {
		return (
			<div>
				{this.props.skill.name}
				<FontAwesome name="times" onClick={this.props.removeSkill} />
			</div>
		);
	}
}

export default AssignedSkills;
