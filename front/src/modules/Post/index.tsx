import Posts from './pages/Posts';
import Create from './pages/Create';
import Single from './pages/Single';
import PostReducer from './store';

const postReducer = new PostReducer().createSlice().reducer;

export { Posts, Create, Single, postReducer };