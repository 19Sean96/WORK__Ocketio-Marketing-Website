import styled from "styled-components";

export default styled.main`
	#privacyPolicy {
		margin-top: 100px;
		.section {
			&--heading {
				grid-column: 2/12;
				grid-row: 1/2;
				* {
					text-align: center;
				}
			}

			&--body {
				grid-column: 2/12;
				grid-row: 2/3;
				justify-content: flex-start;
				display: flex;
				flex-direction: column;

				&__item {
					max-width: 900px;
					width: 100%;
					margin: 0 auto 34px;

					h6,
					p {
						font-size: 17px;
					}

					h6 {
						font-weight: 900;
						margin-bottom: 3px;
					}

					p {
						line-height: 1.75em;
					}
				}

				h4 {
					max-width: 900px;
					width: 100%;
					margin: auto;
					margin-bottom: 14px;
					text-align: left;
				}
			}
		}
	}
`;
