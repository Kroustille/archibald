export function safeParseInt(value: string): number {
  const parsedNumber = parseInt(value, 10)
  return Number.isNaN(parsedNumber) ? 0 : parsedNumber
}