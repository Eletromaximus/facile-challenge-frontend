import type { NextPage } from 'next'
import { useState } from 'react'
import HttpClient from '../src/http/HTTPClient'
import { Grid } from '../src/layout/Grid'
import WebsitePages from '../src/WebsitePages'

const Home: NextPage = () => {
  const [text, setText] = useState('')

  function onSubmit () {
    HttpClient('http://localhost:3000/encript', {
      method: 'POST',
      body: JSON.stringify({ text })
    })
    console.log('subiu')
  }

  return (
    <WebsitePages>
      <Grid.Row
        justifyContent='center'
      >
        <span style={{fontSize: '64px'}}>
          <h1>Encript/Decrypt</h1>
        </span>
      </Grid.Row>

      <form action="">
        <input type="text" /> 
        <button onSubmit={onSubmit}/>
      </form>
    </WebsitePages>
  )
}

export default Home
