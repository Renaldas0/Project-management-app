import { useState } from 'react';
import Sidebar from './components/Sidebar';
import NewProject from './components/NewProject';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <NewProject />
    </main>
  )
}

export default App
