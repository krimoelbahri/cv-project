import React from "react";

class Information extends React.Component {
	render() {
		let info = this.props.info;
		return (
			<div className="body-info">
				{info.map((obj, i) => {
					return (
						<div key={i} className="information">
							<div className="pd-1px">
								<h3>{this.props.place}: </h3> <p>{obj.place}</p>
							</div>
							<div className="pd-1px">
								<h3>{this.props.title}: </h3>
								<p>{obj.title}</p>
							</div>
							<div className="pd-1px date">
								<div>
									<h3>From: </h3>
									<p>{obj.startDate}</p>
								</div>
								<div>
									<h3>To: </h3>
									<p>{obj.endDate}</p>
								</div>
							</div>
							<div className="pd-1px">
								<p>{obj.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
export { Information };
