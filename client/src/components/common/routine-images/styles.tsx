import styled from 'styled-components'

interface IStyles {
	visible: boolean
}

const Modal = styled.div`
	width: 95%;
	min-height: calc(100vh - 30px);
	background-color: #fff;
	position: relative;
	z-index: 15;
	border-radius: 30px;
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.title {
		padding: 5px 0 15px 0;
		& > h2 {
			text-align: center;
		}
	}

	.image-list {
		height: 77vh;
		display: flex;
		flex-wrap: wrap;
		overflow-y: auto;
		padding: 15px 10px;
	}

	.actions {
		display: flex;
		justify-content: space-around;
		padding: 15px 0 0 0;

		& > button {
			border: 1px solid #00AEEF;
			border-radius: 6px;
			padding: 8px 35px;
			font-size: 18px;
		}

		&__first-button {
			color: #00AEEF;
			background-color: #fff;
		}

		&__secound-button {
			color: #fff;
			background-color: #00AEEF;
		}
	}
`

const Image = styled.label`
	width: 50%;
	input[type = "radio"] {
		display: none;
	}
	input:checked ~ .wrapper {
		box-shadow: 0px 0px 15px -3px #2196f3;
	}
	.wrapper {
		border-radius: 20px;
		transition: all ease-in-out .4s;
		& > img {
			width: 100%;
			padding: 13px;
		}
	}
`;

const Container = styled.div<IStyles>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 11;
	display: ${({ visible }) => visible ? 'flex' : 'none'};
	justify-content: center;
	align-items: center;
`
const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.4);
	z-index: 12;
`
export { Container, Overlay, Modal, Image }