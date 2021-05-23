import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useHistory, useParams } from 'react-router-dom';
import RoutineService from '../../services/routine';
import { BottomHeader, CreateRoutine } from '../../components/common';
import { Content, Image, InfoContainer, Info, Button, Header, Menu } from './styles';

interface Routine {
  id: number,
  name: string;
  image: string;
  date: Date;
  end_date: Date;
  start_time: string;
  end_time: string;
  time_course: string;
}

const Routine: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [updateRoutine, setUpdateRoutine] = useState(false);
  const [routine, setRoutine] = useState<Routine>({} as Routine);
  const history = useHistory()
  const { id }: { id: string } = useParams()

  useEffect(() =>{
    RoutineService.find({ id }).then((data: any) => {
      setRoutine(data.data);
    })
  }, [RoutineService, setRoutine]);

  const deleteRoutine = () => RoutineService.delete({ id }).then((data: any) => history.push('/'))

  const getRoutines = () => {
		RoutineService.find({ id }).then((data: any) => {
      setRoutine(data.data);
    })
	}

  const handleUpdateModal = () => {
    setVisible(false)
    setUpdateRoutine(true)
  }

  return (
    <div>
      <Header>
        <svg onClick={() => history.push('/')} width="18" height="25" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.8555 1L6.17578 10.0909L1 14.4969L16.8555 28.651" stroke="white" stroke-width="2" stroke-linejoin="round"/>
        </svg>
        <h2>{routine.name}</h2>
        <svg onClick={() => setVisible(true)} width="5" height="25" viewBox="0 0 5 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="white"/>
          <circle cx="2.5" cy="12.5" r="2.5" fill="white"/>
          <circle cx="2.5" cy="22.5" r="2.5" fill="white"/>
        </svg>
        {visible && (
          <Menu onClick={() => setVisible(false)}>
            <ul onClick={event => event.stopPropagation()}>
              <li onClick={handleUpdateModal} style={{ borderBottom: '0.5px solid rgb(0 0 0 / 15%)' }}>Editar</li>
              <li onClick={() => deleteRoutine()}>Excluir</li>
            </ul>
          </Menu>
        )}
      </Header>
      <Content>
        <Image>
          <div className="image-wrapper">
            {routine.image && (
              <img src={require(`../../images/routines/${routine?.image}.png`).default} />
            )}
          </div>
        </Image>
        <InfoContainer>
          <Info>
            <span className="info-title">Início</span>
            <span className="info-content">{routine?.date && format(new Date(routine.date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
          </Info>
          <Info>
            <span className="info-title">Término</span>
            <span className="info-content">{routine?.end_date && format(new Date(routine.end_date), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</span>
          </Info>
          <Info>
            <span className="info-title">Horário</span>
            <span className="info-content">{routine.start_time} às {routine.end_time}</span>
          </Info>
          <Info>
            <span className="info-title">Frequência</span>
            <span className="info-content">{routine.time_course}</span>
          </Info>
          <div className="actions">
            <Button onClick={() => {}}>
            <svg strokeWidth="2px" width="23" height="23" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.8333 16.6667V17.1667H28.3333H30.8333C32.8572 17.1667 34.5 18.8095 34.5 20.8333C34.5 22.8572 32.8572 24.5 30.8333 24.5H28.3333H27.8333V25V31.6667C27.8333 33.2322 26.5655 34.5 25 34.5H19.1667V32.5C19.1667 29.7405 16.9261 27.5 14.1667 27.5C11.4072 27.5 9.16667 29.7405 9.16667 32.5V34.5H3.33333C1.76791 34.5 0.500165 33.2324 0.5 31.667C0.5 31.6669 0.5 31.6668 0.5 31.6667L0.507677 25.8334H2.5C5.25948 25.8334 7.5 23.5928 7.5 20.8333C7.5 18.0739 5.25948 15.8333 2.5 15.8333H0.508993L0.516664 10.0007V10C0.516664 8.4312 1.77107 7.16667 3.33333 7.16667H10H10.5V6.66667V4.16667C10.5 2.14281 12.1428 0.5 14.1667 0.5C16.1905 0.5 17.8333 2.14281 17.8333 4.16667V6.66667V7.16667H18.3333H25C26.5655 7.16667 27.8333 8.43448 27.8333 10V16.6667Z" stroke="#fff"/>
            </svg>
              Jogar
            </Button>
          </div>
        </InfoContainer>
      </Content>
      {routine?.id && <CreateRoutine visible={updateRoutine} setVisible={setUpdateRoutine} getRoutines={getRoutines} routine={routine} />}
      <BottomHeader />
    </div>
  )
}

export default Routine