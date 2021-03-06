import React from "react";

class Information extends React.Component {
	constructor(props) {
		super(props);
		this.deleteClick = this.deleteClick.bind(this);
	}
	deleteClick(e) {
		let i = e.target.dataset.index;
		let obj = this.props.info[i];
		this.props.deleteClick(obj);
	}
	render() {
		let info = this.props.info;
		let isPreview = this.props.isPreview;
		if (isPreview) {
			return (
				<div className="body-info">
					{info.map((obj, i) => {
						return (
							<div key={`ID${i}`} className="information">
								<div className="main-information">
									<div className="pd-1px flex-R">
										<h3>{this.props.place}: </h3>
										<p>{obj.place}</p>
									</div>
									<div className="pd-1px flex-R">
										<h3>{this.props.title}: </h3>
										<p>{obj.title}</p>
									</div>
									<div className="pd-1px date flex-R">
										<div className="flex-R">
											<h3>From: </h3>
											<p>{obj.startDate}</p>
										</div>
										<div className="flex-R">
											<h3>To: </h3>
											<p>{obj.endDate}</p>
										</div>
									</div>
									<div className="pd-1px flex-R">
										<p>{obj.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			);
		} else {
			return (
				<div className="body-info">
					{info.map((obj, i) => {
						return (
							<div key={`ID${i}`} className="information">
								<div className="main-information">
									<div className="pd-1px flex-R">
										<h3>{this.props.place}: </h3>
										<p>{obj.place}</p>
									</div>
									<div className="pd-1px flex-R">
										<h3>{this.props.title}: </h3>
										<p>{obj.title}</p>
									</div>
									<div className="pd-1px date flex-R">
										<div className="flex-R">
											<h3>From: </h3>
											<p>{obj.startDate}</p>
										</div>
										<div className="flex-R">
											<h3>To: </h3>
											<p>{obj.endDate}</p>
										</div>
									</div>
									<div className="pd-1px flex-R">
										<p>{obj.description}</p>
									</div>
								</div>
								<div>
									<i
										className="far fa-trash-alt"
										data-index={i}
										onClick={this.deleteClick}
									></i>
								</div>
							</div>
						);
					})}
				</div>
			);
		}
	}
}
class SkillsInformation extends React.Component {
	constructor(props) {
		super(props);
		this.deleteClick = this.deleteClick.bind(this);
	}
	deleteClick(e) {
		let i = e.target.dataset.index;
		let obj = this.props.info[i];
		this.props.deleteClick(obj);
	}
	render() {
		let info = this.props.info;
		let isPreview = this.props.isPreview;
		if (isPreview) {
			return (
				<ul className="body-skill flex-R pd-1px">
					{info.map((obj, i) => {
						return (
							<li key={`ID${i}`} className="skills pd-2px flex-R">
								<i className="fas fa-circle pd-2px"></i>
								<p className="pd-2px">{obj.skill}</p>
							</li>
						);
					})}
				</ul>
			);
		} else {
			return (
				<ul className="body-skill flex-R pd-1px">
					{info.map((obj, i) => {
						return (
							<li key={`ID${i}`} className="skills pd-2px flex-R">
								<i className="fas fa-circle pd-2px"></i>
								<p className="pd-2px">{obj.skill}</p>
								<i
									className="fas fa-minus-circle pd-2px"
									data-index={i}
									onClick={this.deleteClick}
								></i>
							</li>
						);
					})}
				</ul>
			);
		}
	}
}
export { Information, SkillsInformation };
