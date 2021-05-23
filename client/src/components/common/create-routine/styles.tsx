import styled from 'styled-components'

interface IStyles {
	visible: boolean
}
const Modal = styled.div`
	width: 95%;
	min-height: calc(100vh - 30px);
	background-color: #fff;
	position: relative;
	z-index: 10;
	border-radius: 30px;
	padding: 20px 10px;

	.title {
		padding: 5px 0 15px 0;
		& > h2 {
			text-align: center;
		}
	}

	form {
		height: 77vh;
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

	.input-group {
		display: flex;
		align-items: center;
		justify-content: space-between;
		& > span {
			margin: 20px 15px 0 15px;
    	font-size: 18px;
		}
	}

	.routine-image-container {
		& > label {
			display: block;
    	margin: 5px 0;
		}
	}
`

const SelectImage = styled.div`
	height: 200px;
	background-color: #eef4fb;
	border-radius: 10px;
  padding: 13px;
	display: flex;
  justify-content: center;
	cursor: pointer;
	.image-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
    justify-content: center;
		& > img {
			height: -webkit-fill-available;
		}
	}
`;

const Container = styled.div<IStyles>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9;
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
	display: block;
	z-index: 9;
`
export { Container, Overlay, Modal, SelectImage }