export function createData(
  id: number,
  name: string,
  createdAt: string,
  owner: string,
  action: JSX.Element
) {
  return { id, name, createdAt, owner, action };
}
