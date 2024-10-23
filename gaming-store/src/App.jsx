
import './App.css'


import HomePage from './componenets/homepage/homepage'
import Navbar from './componenets/navbar/navbar'

import { QueryClient,QueryClientProvider } from 'react-query'
function App() {

        const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <main>
      <Navbar/> 
      <HomePage/>
    </main>
    </QueryClientProvider>)
}

export default App
