const currency_format = new Intl.NumberFormat(undefined, {
  currency: "NGN",
  style: "currency",
});

export default function formatCurrency(number) {
  return currency_format.format(number);
}
