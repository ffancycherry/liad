export default function Event({ params }: { params: { id: string } }) {
  console.log('Hi', params.id)
  return <h1>{params.id}</h1>
}
