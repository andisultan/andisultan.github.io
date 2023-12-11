/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from 'react'
import { Accordion } from './component/accordion/accordion'

function App() {
  const [likes, setLikes] = useState(0)
  const likeAction = useCallback(() => setLikes(current => current + 1), [])

  console.log('Parent Render')

  return (
    <div className='block w-96 m-auto py-4'>
      {likes}
      <button onClick={likeAction}>Like</button>
      <Accordion items={[{ title: 'Title 1', content: 'Content 1' }, { title: 'Title 2', content: 'Content 2' }]} />
    </div>
  )
}

export default App

/**
 * React.memo : membandingkan props sebelum dan sesudah render
 * jika props sama maka komponen tidak di render ulang
 * React.useMemo : membandingkan nilai sebelum dan sesudah render
 * jika nilai sama maka nilai tidak di render ulang
 * React.useCallback : membandingkan fungsi sebelum dan sesudah render
 * jika fungsi sama maka fungsi tidak di render ulang
 */
