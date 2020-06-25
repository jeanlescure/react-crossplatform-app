import React, {Fragment, useContext, useEffect} from 'react';
// import {Notifications} from 'react-native-notifications';

import {store} from '../store';

const registerDevice = (dispatch: Function) => {
  Notifications.events().registerRemoteNotificationsRegistered((event) => {
    // TODO: Send the token to my server so it could send back push notifications...
    const {deviceToken} = event;

    console.log('Device Token Received:', deviceToken);
    const action = {
      type: 'NotificationActions',
      name: 'setDeviceToken',
      payload: {
        deviceToken,
      },
    };

    dispatch(action);
  });

  Notifications.events().registerRemoteNotificationsRegistrationFailed(
    (event) => {
      console.error(event);
    },
  );

  Notifications.registerRemoteNotifications();
};

const registerNotificationEvents = (dispatch: Function) => {
  Notifications.events().registerNotificationReceivedForeground(
    (notification, completion) => {
      console.log('Notification Received - Foreground', notification);
      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      const {body} = notification;
      if (body[0] === '{') {
        const payload = JSON.parse(body);

        const action = {
          type: 'NotificationActions',
          name: 'startTrip',
          payload,
        };

        dispatch(action);
      }

      completion({alert: body[0] !== '{', sound: true, badge: false});
    },
  );

  Notifications.events().registerNotificationOpened(
    (notification, completion) => {
      console.log('Notification opened by device user', notification);
      console.log(
        `Notification opened with an action identifier: ${notification.identifier}`,
      );
      completion();
    },
  );

  Notifications.events().registerNotificationReceivedBackground(
    (notification, completion) => {
      console.log('Notification Received - Background', notification);

      // Calling completion on iOS with `alert: true` will present the native iOS inApp notification.
      completion({alert: true, sound: true, badge: false});
    },
  );

  Notifications.getInitialNotification()
    .then((notification) => {
      console.log('Initial notification was:', notification || 'N/A');
    })
    .catch((err) => console.error('getInitialNotifiation() failed', err));
};

const PushNotifications = ({children}: {children: any}) => {
  const {dispatch} = useContext(store);

  useEffect(() => {
    registerDevice(dispatch || function () {});
    registerNotificationEvents(dispatch || function () {});
  }, [dispatch]);

  return <Fragment>{children}</Fragment>;
};

export default PushNotifications;
