import CostEffectiveImg from "@images/homepage/body/graphic-cost_effective.svg";
import styled from "styled-components";

export default styled(CostEffectiveImg)`
	overflow: visible;

	#cc-card {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / 68}px))`
					: `translate(0,0)`};
	}
	#gear-card {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / 75}px))`
					: `translate(0,0)`};
	}
	#moving-box-card {
		transform: scale(1)
			${({ $offset, $distanceY }) =>
				$offset > 0
					? `translate(0, calc(${($offset - $distanceY) / -75}px))`
					: `translate(0,0)`};
	}
	#profiles-card {
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
`;
