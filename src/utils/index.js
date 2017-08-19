let notification = null;

function notify(text) {
  if (!notification && Notification.permission === 'granted') {
    notification = new Notification(text);
    setTimeout(() => {
      notification.close();
      notification = null;
    }, 5000);
  }
}

export {
  notify,
};
