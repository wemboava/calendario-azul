import styled from 'styled-components'

interface IStyles {
	hasId: boolean
}

const Button = styled.button`
	position: absolute;
	bottom: 100px;
	left: calc(50% - 90px);
	width: 180px;
	border: none;
	background: #00abec;
	color: #fff;
	padding: 8px 15px;
	border-radius: 30px;
	font-weight: 600;
	display: flex;
	justify-content: center;
	align-items: center;
	& > svg {
		margin-right: 15px;
	}
`;

const CalendarContainer = styled.div`
	min-height: calc(100vh - 180px);
	background-color: #f7f7f7;
	position: relative;
	@media(max-width: 1024px) {
		min-height: 100vh;
	}
	.mbsc-ltr .mbsc-event-time {
    text-align: center;
	}
	.mbsc-event-time {
		width: 3em;
		font-size: 1em;
		display: flex;
		align-items: center;
	}
	.mbsc-event-txt {
		width: 100%;
	}

	.mbsc-cal-hdr {
		background: linear-gradient(0deg,rgba(0,171,236,1) 0%,rgba(0,129,200,1) 100%);
		color: #f7f7f7;
	}
	.mbsc-ios .mbsc-fr-btn {
		color: #fff;
	}

	.mbsc-ios .mbsc-cal-has-marks .mbsc-cal-day {
    padding-top: 0.3em;
	}

	.mbsc-ios .mbsc-cal-c .mbsc-cal .mbsc-cal-body .mbsc-cal-row .mbsc-selected .mbsc-cal-cell-txt {
    border-color: rgba(0,171,236,1);
    background: rgba(0,171,236,1);
    color: #fff;
	}

	.mbsc-ios .mbsc-event-list .mbsc-event-day {
		justify-content: center;
    display: flex;
    background: #f7f7f7;
    color: #636363;
    font-size: 0.8em;
	}
`
const Overlay = styled.div<IStyles>`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,0.4);
	z-index: 1;
	display: ${props => !props.hasId ? 'block' : 'none'};
`
export { CalendarContainer, Overlay, Button }