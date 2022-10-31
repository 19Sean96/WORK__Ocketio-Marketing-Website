import {
	$gray1,
	$gray2,
	$pastelred,
	$primaryblack,
	$secondaryblack,
	$secondarywhite,
} from "@lib/Colors";
import styled from "styled-components";

export default styled.section`
	width: 75%;
	min-width: 275px;
	margin-left: auto;
	margin-right: auto;
	margin-top: 0;

	.title {
		color: ${$primaryblack};
		margin-bottom: 4px;
	}

	.subtitle {
		color: ${$gray2};
		font-weight: 600;
		font-size: 18px;
		text-align: left;
	}

	.image {
		width: 100%;
		aspect-ratio: 16/9;
		position: relative;
		border-radius: 12px;
		margin-top: 50px;
		overflow: hidden;
		border: 3px solid ${$primaryblack};
	}

	.article-decor {
		&__single-circle {
			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 50%;
				width: 40px;
				height: 40px;
				background-color: ${$pastelred};
				border-radius: 50%;
				transform: translate(calc(-100px - 50%), -50%);
			}
		}
	}

	.section {
		&--heading {
			align-items: flex-start;
			position: relative;
			padding-top: 150px;
			margin-bottom: 0;
			z-index: 1;
		}

		&--body {
			padding-top: 60px;
			position: relative;

			.bg {
				position: absolute;
				z-index: 0;
				top: 0;
				left: 50%;
				transform: translate(-50%, -375px);
				width: 100vw;
				height: calc(100% + 375px);
				background-color: ${$primaryblack};
				clip-path: polygon(0% 175px, 100% 0%, 100% 100%, 0% 100%);
			}
			.content {
				position: relative;
				z-index: 1;

				* {
                    max-width: 90ch;
                    color: ${$secondarywhite};
				}
                pre {
                    white-space: normal;
                }
			}
			p {
				font-size: 19px;
				padding: 0 0 1.15em;
				line-height: 1.6em;
			}

			ol,
			ul {
				margin-bottom: 2.3em;
				padding: 32px 24px;
				background-color: ${$secondaryblack};
			}

			ul li {
				position: relative;
			}

			li {
				font-size: 20px;
				margin-left: 2em;
				line-height: 1.3em;
				margin-bottom: 6px;
			}

			a {
				color: #139bbf;
				text-decoration: none;
			}

			h1,
			h2,
			h3 {
				margin: 0 0 0.35em;
			}

			p + h1,
			p + h2,
			p + h3 {
				margin-top: 1.5em;
			}

			h1 {
				font-size: 42px;
			}

			h2 {
				font-size: 34px;
			}

			h3 {
				font-size: 29px;
			}

			img {
				padding: 12px;
				box-shadow: 0 0 12px rgba(0, 0, 0, 0.16);
				border-radius: 6px;
			}

			blockquote {
				margin: 60px 0px;
				padding: 32px 24px;
				box-shadow: 0 1em 24px rgba(0, 0, 0, 0.13);
				border-radius: 10px;

				p,
				ul,
				ol,
				li {
					margin-bottom: 0;
				}

				ol,
				ul {
					margin-top: 0.5em;
				}

				li {
					font-family: monospace;
				}
			}

			img + blockquote {
				margin: 20px 0px 60px 0px;
			}

			video {
				width: 100%;
				height: 100%;
			}

			@media screen and (max-width: 1920px) {
				p {
					font-size: 17px;
				}

				li {
					font-size: 16px;
				}
				h1 {
					font-size: 34px;
				}

				h2 {
					font-size: 29px;
				}

				h3 {
					font-size: 25px;
				}
			}

			@media screen and (max-width: 1150px) {
				p {
					font-size: 16px;
				}

				li {
					font-size: 15px;
				}
				h1 {
					font-size: 31px;
				}

				h2 {
					font-size: 27px;
				}

				h3 {
					font-size: 23px;
				}
			}

			@media screen and (max-width: 820px) {
			}

			@media screen and (max-width: 530px) {
			}
		}
	}
`;
