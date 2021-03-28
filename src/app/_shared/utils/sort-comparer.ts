export function sortByLatest(a: any, b: any) {
  return b.createdAt?.toString().localeCompare(a.createdAt?.toString());
}

export function sortByOldest(a: any, b: any) {
  return a.createdAt?.toString().localeCompare(b.createdAt?.toString());
}
