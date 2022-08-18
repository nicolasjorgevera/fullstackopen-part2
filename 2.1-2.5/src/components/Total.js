const Total = ({parts}) => {
    const exercises = parts.map (part => (part.exercises))
    const totalExercises = exercises.reduce ((accumulatedValue, currentValue) => (accumulatedValue + currentValue))
    return( 
        <>
        {<p><b>Total of {totalExercises} exercises</b></p>}
        </>
    )
}


export default Total