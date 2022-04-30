export function safeParseInt(value: string): number {
  const parseNumber = Number.parseInt(value, 10)

  return Number.isNaN(parseNumber) ? 0 : parseNumber
}