import styled from "styled-components";
export default styled.div`
	#heroImageMain {
		transform: scale(1)
			${(props) => ` translate(9%, calc(0px - ${props.offset / -10 + -1}px))`};

		@media (max-width: 1150px) {
			transform: scale(1)
				${(props) =>
					` translate(22.5%, calc(-25px - ${props.offset / -10 + -1}px))`};
		}
		@media (max-width: 875px) {
			transform: scale(1)
				${(props) =>
					` translate(-8%, calc(-25px - ${props.offset / -10 + -1}px))`};
		}

		@media (max-width: 450px) {
			transform: scale(1)
				${(props) =>
					` translate(-50%, calc(-25px - ${props.offset / -10 + -1}px))`};
		}
	}

	#heroImageSubTop {
		transform: scale(1)
			${(props) =>
				` translate(${-(props.offset / -25)}px, calc(0px - ${
					props.offset / -15 + -1
				}px))`};

		@media (max-width: 1150px) {
			transform: scale(1)
				${(props) =>
					` translate(calc(25px + ${-(props.offset / -15)}px), calc(25px - ${
						props.offset / -15 + -1
					}px))`};
		}
		@media (max-width: 875px) {
			transform: scale(1)
				${(props) =>
					` translate(calc(35px + ${-(props.offset / -15)}px), calc(-10% - ${
						props.offset / -15 + -1
					}px))`};
		}

		@media (max-width: 450px) {
			transform: scale(1)
				${(props) =>
					` translate(calc(30% + ${-(props.offset / -15)}px), calc(0% - ${
						props.offset / -15 + -1
					}px))`};
		}
	}

	#heroImageSubBot {
		transform: scale(1)
			${(props) => ` translate(0px, calc(0px - ${props.offset / -15 + -1}px))`};

		@media (max-width: 1150px) {
			transform: scale(1)
				${(props) =>
					` translate(0px, calc(25px - ${props.offset / -15 + -1}px))`};
		}
		@media (max-width: 875px) {
			transform: scale(1)
				${(props) =>
					` translate(0px, calc(-10% - ${props.offset / -15 + -1}px))`};
		}

		@media (max-width: 450px) {
			transform: scale(1)
				${(props) => ` translate(0px, calc(0% - ${props.offset / -15 + -1}px))`};
		}
	}
`;