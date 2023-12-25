import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

function Home() {
    const {username} = useContext(UserContext);
  return (
    <div>
     Welcome {username}
    </div>
  )
}

export default Home
