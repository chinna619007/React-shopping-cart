export default function formCurrency(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + "";
}
