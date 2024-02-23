import React from 'react'

function FComponentListName () {
    const names = ['Oleg', 'Irina', 'Nik'];
  return (
    <>
    <h3>List of names:</h3>
    <ul>
    {names.map((item, index) => (
        <li key={index}>{item}</li>
        ))}

    </ul>
    </>
  );
}

export default FComponentListName