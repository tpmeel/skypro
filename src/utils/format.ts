export const formatPrice = (price: number): string => {
    const formatted = String(price)
    return `${formatted.slice(0, -3)} ${formatted.slice(-3)} руб.`
}
