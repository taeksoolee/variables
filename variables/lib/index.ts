export function parseId(id: unknown): number {
  return Number(id);
}

export function isId(id: unknown): id is number {
  return !isNaN(parseId(id));
}