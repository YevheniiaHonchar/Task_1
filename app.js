const arr = [12, 45, 34, 45, -89, 100, 4, 200, "go"];
const result = arr.some(function (elem) {
  return typeof elem !== "number";
});
if (result === false) {
  console.log(Math.max(...arr));
} else {
  alert("fail");
}
