export default function timeStamp() {
  const addDate = new Date().getTime();
  const formattedDate = new Date(addDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedTime = new Date(addDate).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDateTime = `${formattedDate} ${formattedTime}`;
  return formattedDateTime;
}
