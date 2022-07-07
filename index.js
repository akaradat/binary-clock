/**
 * @param {*} timeString format HHmmss
 *
 * @return {string} binary string with zero padding example: ['0011', '0010','0001','1000','0011','0101']
 */
function convertTimeToBinary(timeString) {
  return timeString
    .split('')
    .map((time) => parseInt(time, 10).toString(2).padStart(4, '0'));
}

/**
 * @return {string} time string in format HHmmss
 */
function getCurrentTimex() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${hours}${minutes}${seconds}`;
}

function main() {
  const currentTime = getCurrentTimex();
  console.log(currentTime, convertTimeToBinary(currentTime));
}

main();
