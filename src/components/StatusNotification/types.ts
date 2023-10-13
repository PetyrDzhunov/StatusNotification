export enum Status {
  Pending = 'Pending',
  Denied = 'Denied',
  In_Progress = 'In Progress',
  Approved = 'Approved',
}

export type StatusNotification = {
  color: string;
  title: string;
  icon: React.ElementType;
};

export type StatusNotificationProps = {
  notification: StatusNotification;
};
