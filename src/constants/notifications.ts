import LoopIcon from '@mui/icons-material/Loop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import {
  Status,
  StatusNotification,
} from '../components/StatusNotification/types';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const STATUS_NOTIFICATIONS: StatusNotification[] = [
  { color: 'gray', title: Status.Pending, icon: ArrowBackIcon },
  { color: 'red', title: Status.Denied, icon: DoNotDisturbAltIcon },
  { color: 'yellow', title: Status.In_Progress, icon: LoopIcon },
  { color: 'green', title: Status.Approved, icon: CheckBoxIcon },
];
