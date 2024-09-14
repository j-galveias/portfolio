export default function listToString(list?: string[]) {
  return list?.join(', ') ?? ''
}
