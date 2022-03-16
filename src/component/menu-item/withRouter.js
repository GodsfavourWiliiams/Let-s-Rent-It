import {useLocation, useNavigate} from 'react-router-dom';


export function withRouter(MenuItem){
    return(props) => {
      const location = useLocation();
      const navigate = useNavigate()
      return(
      <MenuItem {...props}
      navigate={navigate}
      location={location}/>
      )
    }
  }