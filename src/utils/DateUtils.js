export function getFormattedDate(rawDate) {
    const date = new Date(rawDate);
    let day = date.getDate();
    day = day < 10 ? `0${day}` : day;
    let month = date.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;
    let minutes = date.getMinutes();
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${day}-${month}-${date.getFullYear()} ${date.getHours()}:${minutes}`
}