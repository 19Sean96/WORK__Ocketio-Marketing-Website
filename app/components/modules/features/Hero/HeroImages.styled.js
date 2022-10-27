import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export default styled(ScrollAnimation)`
	align-self: center;
	position: relative;
	z-index: 5;
	grid-column: 7/13;
	grid-row: 1/2;

	svg {
	}

	#heroImageSubTop,
	#heroImageSubBot,
	#heroImageMain {
		max-width: 360px;
		width: 75%;
	}

	#heroImageMain {
		transition: transform 4s cubic-bezier(0.22, 1, 0.36, 1);
		position: relative;
		filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.61))
			drop-shadow(0 0px 4px rgba(0, 0, 0, 0.63))
			drop-shadow(-4px 16px 64px rgba(0, 0, 0, 0.82));

		transform: scale(1)
			${(props) => `translate(
				9%, 
				${props.offset / 7.5}px
			)`};

		@media (max-width: 1375px) {
			transform: scale(1)
				${(props) => `translate(
					0%,
					${props.offset / 7.5}px
				)`};
		}

		@media (max-width: 1250px) {
			transform: scale(1)
				${(props) => `translate(
					4%,
					${props.offset / 9}px
				)`};
		}
		@media (max-width: 1100px) {
			transform: scale(1)
				${(props) => `translate(
					-6vw,
					${-25 + (props.offset / 9)}px
				)`};
		}
		@media (max-width: 960px) {
			transform: scale(1)
				${(props) => `translate(
					-12vw,
					${-25 + (props.offset / 9)}px
				)`};
		}
		@media (max-width: 650px) {
			transform: scale(1.1)
				${(props) => `translate(
					-15vw,
					${-5 + (props.offset / 9)}px
				)`};
		}

		@media (max-width: 450px) {
			transform: scale(.825)
				${(props) => `translate(
					-15vw,
					${props.offset / 9}px
				)`};
		}
	}

	#heroImageSubTop,
	#heroImageSubBot {
		position: absolute;
		filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.11))
			drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.23))
			drop-shadow(-16px 16px 32px rgba(0, 0, 0, 0.22));
	}

	#heroImageSubTop {
		left: 50%;
		top: 51.125%;
		transition: transform 3.5s cubic-bezier(0.22, 1, 0.36, 1);

		transform: scale(1)
			${(props) => `translate(
				${-20 + props.offset / 17.5}px, 
				${-20 + props.offset / 15}px
			)`};

		@media (max-width: 1250px) {
			transform: scale(1)
				${(props) => `translate(
					calc(-.75vw + ${props.offset / 17.5}px), 
					calc(-2.4vw + ${props.offset / 10}px)
				)`};
		}

		@media (max-width: 1100px) {
			transform: scale(1)
				${(props) => `translate(
					calc(.5vw + ${props.offset / 17.5}px), 
					calc(-5vw + ${props.offset / 10}px)
				)`};
		}

		@media (max-width: 960px) {
			transform: scale(1.05)
				${(props) => `translate(
					calc(-1vw + ${props.offset / 17.5}px), 
					calc(-7.5vw + ${props.offset / 10}px)
				)`};
		}

		@media (max-width: 650px) {
			transform: scale(1.05)
				${(props) => `translate(
					${props.offset / 17.5}px, 
					calc(-11vw + ${props.offset / 10}px)
				)`};
		}

		@media (max-width: 450px) {
			transform: scale(.825)
				${(props) => `translate(
					calc(-19vw + ${props.offset / 17.5}px), 
					calc(-23vw + ${props.offset / 10}px)
				)`};
		}
	}

	#heroImageSubBot {
		left: 45%;
		top: 82.5%;
		transition: transform 3s cubic-bezier(0.22, 1, 0.36, 1);

		transform: scale(1)
			${(props) => `translate(
				${-20 + props.offset / 17.5}px, 
				${-20 + props.offset / 10}px
			)`};

		@media (max-width: 1250px) {
			transform: scale(1)
				${(props) => `translate(
					calc(-.75vw + ${props.offset / 17.5}px), 
					calc(-2.4vw + ${props.offset / 8}px)
				)`};
		}

		@media (max-width: 1100px) {
			transform: scale(1)
				${(props) => `translate(
					calc(-4.5vw + ${props.offset / 17.5}px), 
					calc(-4vw + ${props.offset / 8}px)
				)`};
		}

		@media (max-width: 960px) {
			transform: scale(1.05)
				${(props) => `translate(
					calc(-5vw + ${props.offset / 17.5}px), 
					calc(-6vw + ${props.offset / 8}px)
				)`};
		}

		@media (max-width: 650px) {
			transform: scale(1.05)
				${(props) => `translate(
					calc(-2.5vw + ${props.offset / 17.5}px), 
					calc(-9vw + ${props.offset / 8}px)
				)`};
		}

		@media (max-width: 450px) {
			transform: scale(.825)
				${(props) => `translate(
					calc(-25vw + ${props.offset / 17.5}px), 
					calc(-28vw + ${props.offset / 10}px)
				)`};
		}
	}

	@media screen and (max-width: 1250px) {
		#heroImageSubTop,
		#heroImageSubBot,
		#heroImageMain {
			max-width: 340px;
		}
	}

	@media screen and (max-width: 1100px) {
		grid-row: 2/3;
		grid-column: 4/10;

		#heroImageSubTop,
		#heroImageSubBot,
		#heroImageMain {
			width: 100%;
			max-width: 380px;
		}
	}
	@media screen and (max-width: 450px) {
		grid-column: 1/13;
	}
`;
