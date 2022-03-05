import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/counterSlice'

const Counter = () => {
    // Call useSelector to grab the current value of our state variable
    // from the store, and assign it to a variable named "count"
    const count = useSelector((state) => state.value)
    // And include the useDispatch hook...
    const dispatch = useDispatch()
    const [ input, setInput ] = useState(0)

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

return (
        <div className='App'>
            <h1>{count}</h1>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}>
                Decrement
            </button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter
// const Counter = () => {
//     return (
//         <div className='App'>
//             <div>
//                 <h1 id="value"></h1>
//             </div>
//             <div>
//                 <button className="plus">+1</button>
//                 <button className="minus">-1</button>
//             </div>
//             <div>
//                 <input id='userInput'></input>
//                 <button id='submit'>Custom Add</button>
//             </div>
//         </div>
//     )
// }

// export default Counter