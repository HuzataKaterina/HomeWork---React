import React, {useState} from 'react'

const FChangeLists = () => {
    const [usersList1, setUsersList1] = useState(['Irina', 'Oleg', 'Stas', 'Nik']);
    const [usersList2, setUsersList2]= useState([]);
    const changeList = () => {
        const item = usersList1[0];
        setUsersList1(usersList1.slice(1))
        setUsersList2([...usersList2, item])
    }
  return (
    <>
    <h3>Список 1:</h3>
    <ul>
        {usersList1.map((user, index) => (
            <li key={index}>{user}</li>
        ))}
    </ul>
    <h3>Список 2:</h3>
    <ul>
        {usersList2.map((user, index) => (
            <li key={index}>{user}</li>
        ))}
    </ul>
    <button onClick={changeList}>Перемістити зі списку 1 в 2</button>
    </>
  )
}
export default FChangeLists