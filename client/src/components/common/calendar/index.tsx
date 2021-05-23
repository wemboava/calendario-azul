import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isSameMonth, getMonth, getYear } from 'date-fns';

import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.react.min.css';

import RoutineService from '../../../services/routine';

import { CalendarContainer, Overlay, Button } from './styles';
import { CreateRoutine } from '..';

const Calendar: React.FC = () => {
	const history = useHistory()
	const [routines, setRoutines] = useState<any[]>([]);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		localStorage.setItem('month', JSON.stringify(new Date()));
	
		getRoutines()
	}, [])

	const onEventSelect = ({ event }: any, inst: any) => {
		history.push(`/rotina/${event.id}`);
	};

	const getRoutines = (date = new Date()) => {
		RoutineService.list({
			month: getMonth(date),
			year: getYear(date)
		}).then((response: any) => {
			const newRotines = response?.data?.map((date: any) => ({
				...date,
				text: `
					<div style="display: flex; justify-content: space-between; align-items: center;">
						<h2 style="display: flex; align-items: center; margin-bottom: 5px;">${date.text}</h2>
						<img style="max-height: 55px;" src=${require('../../../images/routines/praia.png').default} />
					</div>
				`,
				color: "#000000".replace(/0/g,() => (~~(Math.random()*16)).toString(16))
			}))
			return setRoutines(newRotines);
		})	
	}

	const onPageChange = (event: any) => {
		const { firstDay } = event;
		const month = JSON.parse(localStorage.getItem('month') || '');

		if(!isSameMonth(new Date(month), firstDay)) {
			getRoutines(firstDay)
		}
		localStorage.setItem('month', JSON.stringify(firstDay));
	};

	return (
		<CalendarContainer>
			<Overlay hasId={true} />
			<mobiscroll.Eventcalendar
				// firstDay={1}
				lang="pt-BR"
				theme="ios" // Specify theme like: theme="ios" or omit setting to use default
				display="inline" // Specify display mode like: display="bottom" or omit setting to use default
				showEventCount={false} // More info about showEventCount: https://docs.mobiscroll.com/4-4-0/react/eventcalendar#opt-showEventCount
				data={routines}
				view={{
					calendar: {
						type: 'week',
						size: 1
					},
					eventList: {
						type: 'day',
						size: 1
					}
				}}
				showOuterDays
				onEventSelect={onEventSelect}
				onPageChange={onPageChange}
			/>
			<Button onClick={() => setVisible(true)}>
				<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.3418 0V19" stroke="white" stroke-width="2"/>
					<path d="M0 9.17285H20" stroke="white" stroke-width="2"/>
				</svg>
				NOVA ROTINA
			</Button>
			<CreateRoutine visible={visible} setVisible={setVisible} getRoutines={getRoutines} />
		</CalendarContainer>
	);
};

export default Calendar;
