function addCommasAndUnderscore_Logic(num) {
  const s = String(num);
  const n = s.length;

  if (n <= 3) {
    return s;
  }

  const chunks = [];

  for (let i = n; i > 0; i -= 3) {
    chunks.unshift(s.slice(Math.max(0, i - 3), i));
  }

  let formatted = chunks.join(",");

  if (formatted.includes(",")) {
    const lastCommaIndex = formatted.lastIndexOf(",");

    return (
      formatted.substring(0, lastCommaIndex) +
      "_" +
      formatted.substring(lastCommaIndex + 1)
    );
  }

  return formatted;
}
console.log(addCommasAndUnderscore_Logic(1000)); // "1_000"
console.log(addCommasAndUnderscore_Logic(99999999)); // "99,999_999"
console.log(addCommasAndUnderscore_Logic(100)); // "100"
console.log(addCommasAndUnderscore_Logic(2500)); // "2_500"
console.log(addCommasAndUnderscore_Logic(1000000000)); // "1,000,000_000"