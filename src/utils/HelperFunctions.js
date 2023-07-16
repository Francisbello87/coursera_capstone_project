export const generateTimeOptions = () => {
  const startTime = new Date();
  startTime.setHours(10, 0, 0); // Start time: 10:00 AM
  const endTime = new Date();
  endTime.setHours(22, 0, 0); // End time: 10:00 PM
  const interval = 15; // Interval between time options in minutes

  const options = [];
  let time = new Date(startTime);

  while (time <= endTime) {
    const formattedTime = time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    options.push(formattedTime);
    time.setMinutes(time.getMinutes() + interval);
  }

  return options;
  };