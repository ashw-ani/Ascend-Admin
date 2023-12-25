const dateFormatter = (startTime, endTime) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = String(start.getDate()).padStart(2, '0');
  const month = String(start.getMonth() + 1).padStart(2, '0'); // Note: Month is zero-based, so we add 1
  const year = start.getFullYear();

  // Get hours and minutes
  const starthours = start.getHours();
  const startminutes = start.getMinutes();

  // Determine whether it's AM or PM
  const amPm = starthours >= 12 ? 'pm' : 'am';

  // Convert to 12-hour format
  const formattedStartHours = starthours % 12 === 0 ? 12 : starthours % 12;
  const formattedStartMinutes =
    startminutes < 10 ? '0' + startminutes : startminutes;

  // Formatted time string
  const formattedStartTime = `${formattedStartHours}:${formattedStartMinutes} ${amPm}`;

  // Get hours and minutes
  const endhours = end.getHours();
  const endminutes = end.getMinutes();

  // Determine whether it's AM or PM
  const AmPm = endhours >= 12 ? 'pm' : 'am';

  // Convert to 12-hour format
  const formattedEndHours = endhours % 12 === 0 ? 12 : endhours % 12;
  const formattedEndMinutes = endminutes < 10 ? '0' + endminutes : endminutes;

  // Formatted time string
  const formattedEndTime = `${formattedEndHours}:${formattedEndMinutes} ${AmPm}`;

  // Get dd-mm-yyyy
  const formattedDate = `${day}-${month}-${year}`;
  // Get the day of the week as a string
  const dayOfWeekString = daysOfWeek[start.getDay()];
  return {
    day: `${dayOfWeekString} ${formattedDate}`,
    time: `${formattedStartTime} - ${formattedEndTime}`,
  };
};

export default dateFormatter;
