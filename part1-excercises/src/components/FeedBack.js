import React, { useState } from "react"
import Button from "./Button"

const FeedBack = () => {

    const [ratings, setRatings] = useState({
        good: 0, neutral: 0, bad: 0
    })

    const handleGoodClick = () => {
        setRatings({...ratings, good: ratings.good + 1})
    }
    const handleNeutralClick = () => {
        setRatings({...ratings, neutral: ratings.neutral + 1})

    }
    const handleBadClick = () => {
        setRatings({...ratings, bad: ratings.bad + 1})
    }

    return(
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text='Good' />
            <Button handleClick={handleNeutralClick} text='Neutral' />
            <Button handleClick={handleBadClick} text='Bad' />
            <h2>statistics</h2>
            <p>good: {ratings.good}</p><br/>
            <p>neutral: {ratings.neutral}</p><br/>
            <p>bad: {ratings.bad}</p><br/>
        </div>
    )
}
export default FeedBack