import { useLocation } from 'react-router-dom';
import NotFound from '../../../pages/NotFound/NotFound';

const ErrorBoundry = ({children}: {children: React.ReactNode}) => {
    const location = useLocation();
    const allowedRoutes: string[] = ['/signup', '/signin', '/']

    if(!allowedRoutes.includes(location.pathname)){
        return <NotFound/>
    }
  return children
}

export default ErrorBoundry;