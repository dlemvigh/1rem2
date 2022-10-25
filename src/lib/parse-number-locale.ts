export function parseNumberLocale(input: string): number {
    return parseFloat(input.replaceAll(",", "."));
}