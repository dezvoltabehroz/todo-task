import { useSelector } from 'react-redux'
import { NavLink, Outlet } from 'react-router-dom'
import { Button, Result } from 'antd';

const ProtectedRoute = () => {
  const auth = useSelector((state) => { return state.auth; });

  console.log("userInfo ===> ", auth)

  if (!auth.userToken) {
    return (
      <Result
        status="warning"
        title="Please login to access."
        extra={
          <Button type="primary" key="console">
            <NavLink to='/'>Login</NavLink>
          </Button>
        }
      />
    )
  }

  // returns child route elements
  return <Outlet />
}

export default ProtectedRoute