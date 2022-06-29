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

function main() {
  const currentTime = '221435'; // ['0011', '0010','0001','1000','0011','0101']
  console.log(convertTimeToBinary(currentTime));
}

main();
