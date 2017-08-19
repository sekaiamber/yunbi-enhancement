function initnotify() {
  // Let's check if the browser supports notifications
  if (!window.Notification) {
    console.log('This browser does not support desktop notification');
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((/* permission*/) => {
      // If the user is okay, let's create a notification
      // if (permission === "granted") {
      //   var notification = new Notification("Hi there!");
      // }
    });
  }
}

initnotify();
