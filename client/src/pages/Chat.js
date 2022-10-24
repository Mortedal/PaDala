import React from 'react'
import {ChatEngine} from 'react-chat-engine'

function Chat() {

    const auth = localStorage.getItem('user');
    const user = JSON.parse(auth).email
    const password = JSON.parse(auth).password

    

  return (
    <div>
      <ChatEngine
			height='100vh'
			userName = {user}
			userSecret={password}
			projectID='9dbe8936-4712-42ec-a632-2ed8b9ac3996'
		/>

    </div>
  )
}

export default Chat