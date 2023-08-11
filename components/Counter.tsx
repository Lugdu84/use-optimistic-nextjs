import { adjustLikes } from "@/app/actions/adjustLikes"


type Props = {
    likes: number
}

export default function Counter({ likes }: Props) {
  return (
    <div className="flex space-x-2 border p-5 mb-2">
        <h2>Normal Counter</h2>
        <button onClick={() => adjustLikes(-1)}>-</button>
        <p>{likes}</p>
        <button onClick={() => adjustLikes(1)}>+</button>
    </div>
  )
}