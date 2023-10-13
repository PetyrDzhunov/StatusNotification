import { StatusNotificationProps } from './types';
import { Box, Typography } from '@mui/material';

const StatusNotification: React.FC<StatusNotificationProps> = ({
  notification,
}) => {
  const { color, icon: Icon, title } = notification;
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: '300px',
        height: '125px',
        borderRadius: '4px',
        padding: '10px 20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Icon sx={{ color: 'purple' }} />
        <Typography
          sx={{ color: 'black', marginTop: '10px', fontWeight: 'bold' }}
          paragraph
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatusNotification;
