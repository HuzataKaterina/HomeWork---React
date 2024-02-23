import React from 'react'

const FCompStopProp = () => {
    const divHandelClick = () => {
        console.log('div is clicked')
    }
    const btnHandelClik = (e) => {
        e.stopPropagation()
        console.log('button is clicked')
    }
  return (
    <>
    <div className='div6' onClick={divHandelClick}>

    <button onClick={btnHandelClik}>Click</button>
    </div>
    
    </>
  )
}

export default FCompStopProp