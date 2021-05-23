import React, { useState } from 'react';

import RoutineService from '../../../services/routine';

import { Container, Overlay, Modal, Image } from './styles';

interface IProps {
	visible: boolean
	setVisible: (visible: boolean) => void
	formik: any
}

const RoutineImages: React.FC<IProps> = ({ visible, setVisible, formik }) => {
	const [currentImage, setCurrentImage] = useState('');
	const listImages = [
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
		'praia',
	]

	const addImage = () => {
		formik.handleChange({
			target: {
				name: 'image',
				value: currentImage
			}
		})
		setVisible(false)
	}

	return (
		<Container visible={visible}>
			<Overlay />
			<Modal>
				<div className="title">
					<h2>Imagens</h2>
				</div>
				<div className="image-list">
					{listImages.map(image => (
						<Image onClick={() => setCurrentImage(image)}>
							<input type="radio" name="routines" value={image} />
							<div className="wrapper">
								<img src={require(`../../../images/routines/${image}.png`).default} />
							</div>
						</Image>
					))}
				</div>
				<div className="actions">
					<button onClick={() => setVisible(false)} className="actions__first-button">Cancelar</button>
					<button onClick={addImage} className="actions__secound-button">Adicionar</button>
				</div>
			</Modal>
		</Container>
	);
};

export default RoutineImages;
