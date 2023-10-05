import Login from './pages/Login';
import Register from './pages/Register';
import UserReducer from './store';

const userReducer = new UserReducer().createSlice().reducer;

export { Login, Register, userReducer };
