import React from 'react';
import { BottomHeader, Header, Calendar } from '../../components/common';

const Dashboard: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <Calendar />
      </div>
      <BottomHeader />
    </div>
  )
}

export default Dashboard;