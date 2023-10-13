import { STATUS_NOTIFICATIONS } from '../constants/notifications';
let nextNotificationIndex = 0;

export function getNextStatusNotification() {
  const nextNotification = STATUS_NOTIFICATIONS[nextNotificationIndex];
  nextNotificationIndex =
    (nextNotificationIndex + 1) % STATUS_NOTIFICATIONS.length;
  return nextNotification;
}
