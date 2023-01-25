export function formatNumberToMoney(number: number) {
  const formatter = Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    minimumFractionDigits: 2,
  })

  const money = formatter.format(number / 100)

  return money
}
