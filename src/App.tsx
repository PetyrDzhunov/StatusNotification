import { useState } from 'react';
import StatusNotification from './components/StatusNotification/StatusNotification';
import { getNextStatusNotification } from './utils/notifictions-utils';
import { Box, Button } from '@mui/material';

function App() {
  const [randomNotification, setRandomNotification] = useState(() =>
    getNextStatusNotification(),
  );

  const changeNotificationHandler = (): void => {
    const newRandomNotification = getNextStatusNotification();
    setRandomNotification(newRandomNotification);
  };

  return (
    <Box>
      <Button onClick={changeNotificationHandler}>Change notification</Button>
      <StatusNotification notification={randomNotification} />
    </Box>
  );
}

export default App;
