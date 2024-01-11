let dateFormat = new Date();

let formattedDate = (dateFormat.getMonth() + 1 ).toString().padStart(2, '0');

console.log(`${dateFormat.getFullYear()}-${formattedDate}-${dateFormat.getDate()} ${dateFormat.getHours()}:${dateFormat.getMinutes()}`)
