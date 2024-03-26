import {auth} from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Home';
const App=()=>{
    const[user]=useAuthState(auth);
    return(<>
    {
        
    }
    </>);
}

export default App;