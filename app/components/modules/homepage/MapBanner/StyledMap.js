import styled from "styled-components";
import WorldMap from "@images/homepage/body/world-map.svg";

export default styled(WorldMap)`
	position: relative;
	overflow: visible;
	#end-point_1 {
		> * {
			transform-origin: 49.5% 22%;
		}

		&-1 {
			animation: pulseInOut 2s ease-in-out 0s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0s infinite both alternate;
		}
	}
	#end-point_2 {
		> * {
			transform-origin: 82% 45%;
		}
		&-1 {
			animation: pulseInOut 2s ease-in-out 0.25s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0.25s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0.25s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0.25s infinite both alternate;
		}
	}
	#end-point_3 {
		> * {
			transform-origin: 94% 85%;
		}
		&-1 {
			animation: pulseInOut 2s ease-in-out 0.5s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0.5s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0.5s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0.5s infinite both alternate;
		}
	}
	#end-point_4 {
		> * {
			transform-origin: 51% 85%;
		}
		&-1 {
			animation: pulseInOut 2s ease-in-out 0.75s infinite both alternate;
		}
		&-2 {
			animation: pulseInOut 1.75s ease-in-out 0.75s infinite both alternate;
		}
		&-3 {
			animation: pulseInOut 1.5s ease-in-out 0.75s infinite both alternate;
		}
		&-4 {
			animation: pulseInOut 1.25s ease-in-out 0.75s infinite both alternate;
		}
	}
`;