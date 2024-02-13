import { Navigate, Outlet } from 'react-router-dom'
const Protected = () => {
  let auth = {'token':false}
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default Protected