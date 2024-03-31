export default function useFormatDate(getDate) {
  const addDate = new Date().getTime();
  const formattedDate = new Date(addDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedDateParams = getDate
    ? new Date(getDate).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;
  const formattedTime = new Date(addDate).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDateTime = `${formattedDate} ${formattedTime}`;
  const formattedDateOnly = `${formattedDate}`;
  return [formattedDateTime, formattedDateOnly, formattedDateParams];
}
