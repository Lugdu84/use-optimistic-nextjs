'use client'

import { adjustLikes } from '@/app/actions/adjustLikes'
import { experimental_useOptimistic as UseOptimistic} from 'react'

type Props = {
    likes: number
}

export default function OptimisticCounter({ likes }: Props) {
    const [optimisticLikes, addOptimisticLikes] = UseOptimistic(
        likes,
        (state, amount) => state + Number(amount),
    )

    const updateLikes = async (amount: number) => {
        addOptimisticLikes(amount)
        await adjustLikes(amount)
    }

  return (
    <div className='flex space-x-2 border p-5'>
        <h2>Optimistic Counter for test</h2>
        <button onClick={() => updateLikes(-1)}>-</button>
        <p>{optimisticLikes}</p>
        <button onClick={() => updateLikes(1)}>+</button>
    </div>
  )
}