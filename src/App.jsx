import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Registration from './components/Registration'
import Students from './components/Students'
import RootLayout from './layouts/RootLayout'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Registration/>} />
        <Route path="students" element={<Students/>} />
      </Route>
    )
  )
  return (
    <>
      <div className='h-screen'>
          <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
