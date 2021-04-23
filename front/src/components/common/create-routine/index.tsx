import React, { useState } from 'react';
import { InputForm, SelectForm } from '..';

import { useFormik } from 'formik';

import RoutineService from '../../../services/routine';

import { Container, Overlay, Modal, SelectImage } from './styles';
import RoutineImages from '../routine-images';
import { format } from 'date-fns';

interface IProps {
	visible: boolean
	setVisible: (status: boolean) => void
	getRoutines: (date?: Date) => void
	routine?: any
}

const CreateRoutine: React.FC<IProps> = ({ visible, setVisible, getRoutines, routine }) => {
	const [visibleImageModal, setVisibleImageModal] = useState(false);

	const initialValues = routine ? {
		...routine,
		date: format(new Date(routine.date), 'yyyy-MM-dd'),
		end_date: format(new Date(routine.end_date), 'yyyy-MM-dd'),
	} : {
		name: '',
		date: '',
		start_time: '',
		end_time: '',
		time_course: '',
		end_date: '',
		image: ''
	}

	const formik = useFormik({
		initialValues,
		onSubmit: data => {
			if (routine) {
				const { id, user_id, name, date, start_time, end_time, time_course, end_date, image } = data;
				RoutineService.update({ id, user_id, name, date, start_time, end_time, time_course, end_date, image }).then((response: any) => {
					getRoutines()
					setVisible(false)
				})
			} else {
				RoutineService.create(data).then((response: any) => {
					const month = JSON.parse(localStorage.getItem('month') || '');
					getRoutines(new Date(month))
					setVisible(false)
				})
			}
		},
	});

	const closeModal = () => {
		formik.resetForm()
		setVisible(false)
	}

	console.log('formik', formik)

	return (
		<Container visible={visible}>
			<Overlay />
			<Modal>
				<div className="title">
					<h2>{routine ? 'Editar' : 'Nova'} rotina</h2>
				</div>
				<form onSubmit={formik.handleSubmit}>
					<InputForm name="name" label="Nome" formik={formik} />

					<InputForm name="date" label="Data" formik={formik} type="date" />

					<div className="input-group">
						<InputForm name="start_time" label="Horário" formik={formik} type="time" />
						<span>às</span>
						<InputForm name="end_time" label="" formik={formik} type="time" />
					</div>
					<SelectForm name="time_course" label="Frequência" formik={formik} />

					<InputForm name="end_date" label="Término" formik={formik} type="date" />

					<div className="routine-image-container">
						<label>Imagem</label>
						<SelectImage onClick={() => setVisibleImageModal(true)}>
							{!formik?.values?.image && (
								<div className="image-wrapper">
									<div>
										<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4 4H18V0H4C1.79 0 0 1.79 0 4V18H4V4ZM16 22L8 32H32L26 24L21.9399 29.42L16 22ZM30 13C30 11.34 28.66 10 27 10C25.34 10 24 11.34 24 13C24 14.66 25.34 16 27 16C28.66 16 30 14.66 30 13ZM36 0H22V4H36V18H40V4C40 1.79 38.21 0 36 0ZM36 36H22V40H36C38.21 40 40 38.21 40 36V22H36V36ZM4 22H0V36C0 38.21 1.79 40 4 40H18V36H4V22Z" fill="#607D8B"/>
										</svg>
									</div>
									<span>Selecione uma imagem</span>
								</div>
							)}
							{formik?.values?.image && (
								<div className="image-wrapper">
									<img src={require(`../../../images/routines/${formik.values.image}.png`).default} />
								</div>
							)}
						</SelectImage>
					</div>
				</form>
				<div className="actions">
					<button onClick={closeModal} className="actions__first-button">Cancelar</button>
					<button onClick={() => formik.handleSubmit()} className="actions__secound-button">{routine ? 'Editar' : 'Adicionar'}</button>
				</div>
			</Modal>
			<RoutineImages visible={visibleImageModal} setVisible={setVisibleImageModal} formik={formik} />
		</Container>
	);
};

export default CreateRoutine;
