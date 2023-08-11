
export default async function Home() {

  const res = await fetch("http://localhost:3000/likes", {
    cache: "no-cache",
    next: {
      tags: ["likes"],
    },
  })

  const { likes } = await res.json()


  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h1 className='text-2xl font-bold text-center mb-5'>UseOptimistic Demo</h1>
      <p>{likes}</p>
    </main>
  )
}
