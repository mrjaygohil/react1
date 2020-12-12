import React from "react";
import { Card, CardHeader, CardTitle, Row, Col } from "reactstrap";
const CatTitle = (props) => {
	return (
		<>
			<Row>
				<Col xs="12">
					<Card className="card-chart">
						<CardHeader>
							<Row>
								<Col className="text-left" sm="6">
									<CardTitle tag="h2">{props.title}</CardTitle>
								</Col>
							</Row>
						</CardHeader>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default CatTitle;
