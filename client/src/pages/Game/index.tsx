import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
	import { HTML5Backend } from 'react-dnd-html5-backend'
import { BottomHeader, GameContent } from '../../components/common';
import { Content, Header } from './styles';

const Routine: React.FC = () => {
  const history = useHistory()
  const { id }: { id: string } = useParams()

  return (
    <div>
      <Header>
        <svg onClick={() => history.push('/')} width="18" height="25" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.8555 1L6.17578 10.0909L1 14.4969L16.8555 28.651" stroke="white" stroke-width="2" stroke-linejoin="round"/>
        </svg>
        <h2>Praia</h2>
        <div />
      </Header>
      <Content>
        <DndProvider backend={HTML5Backend}>
					<GameContent />
				</DndProvider>
      </Content>
      <BottomHeader />
    </div>
  )
}

export default Routine