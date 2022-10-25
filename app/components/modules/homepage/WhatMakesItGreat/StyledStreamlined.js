import StreamlinedImg from "@images/homepage/body/graphic-streamlined.svg";
import styled from "styled-components";

export default styled(StreamlinedImg)`
	overflow: visible;

	#user-card {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / -34}px))`
					: `translate(0,0)`};
	}
	#cloud-card {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / -48}px))`
					: `translate(0,0)`};
	}
	#phone-card {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / 75}px))`
					: `translate(0,0)`};
	}
	#folder-card {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / -75}px))`
					: `translate(0,0)`};
	}
	#browser-window {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / 68}px))`
					: `translate(0,0)`};
	}
`;
