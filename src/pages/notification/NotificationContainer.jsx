import React, { useState } from "react";

const NotificationCard = () => {
    const [notificationNumber, setNotificationNumber] = useState(1)

    return (
        <div>
            <p>You have {notificationNumber} new notification</p>
        </div>
    );
};

export default NotificationCard;