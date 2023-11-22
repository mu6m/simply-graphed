function Chart({ dataPoints, color }: any) {

	let pathString = '';
	for (let i = 0; i < dataPoints.length; i++) {
		if(i == 0){
			pathString += `M${dataPoints[i].x},${dataPoints[i].y} `;
		}else if(i == 1){
			pathString += `C${dataPoints[i].x},${dataPoints[i].y} `;
		}else{
			pathString += `${dataPoints[i].x},${dataPoints[i].y} `;
		}
	}

	return (
		<div className="chart-container">
			<svg
				viewBox="0 0 100 100"
				preserveAspectRatio="xMinYMin meet"
				width="100%"
				height="100%"
			>
				<path
					d={pathString}
					fill="none"
					className={`line ${color}`}
					strokeWidth="2"
				/>
			</svg>
		</div>
	);
}

export default function Test() {
	return (
		<>
					<Chart
						dataPoints={[
							{ x: 10, y: 70 },
							{ x: 30, y: 50 },
							{ x: 50, y: 30 },
							{ x: 70, y: 30 },
							{ x: 90, y: 30 },
							{ x: 110, y: 30 },
							{ x: 130, y: 10 },
						]}
						color={"green"}
					/>
					<Chart
						dataPoints={[
							{ x: 10, y: 50 },
							{ x: 30, y: 50 },
							{ x: 50, y: 30 },
							{ x: 70, y: 40 },
							{ x: 90, y: 50 },
							{ x: 110, y: 50 },
							{ x: 130, y: 90 },
						]}
						color={"red"}
					/>

		</>
	);
}
