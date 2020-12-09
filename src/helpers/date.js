const NormalizeDate = (date) => {
  const formattedDate = new Date(date);
  return formattedDate.toString();
};

const CountdownDateTime = (timestamp) => {
  const dateStructure = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  let delta = Math.abs(timestamp - new Date().getTime()) / 1000;
  let result = {};

  for (let key in dateStructure) {
    result[key] = Math.floor(delta / dateStructure[key]);
    delta -= result[key] * dateStructure[key];
  }
  return result;
};

const FormatDateTime = (dateTime) => {
  return dateTime < 10 && dateTime >= 0 ? "0" + dateTime : dateTime;
};

export { NormalizeDate, CountdownDateTime, FormatDateTime };
