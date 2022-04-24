import './styles/App.scss';
import Banner from './component/Banner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
    return (
        <div className='App'>
            <Banner />
        </div>
    );
}
export default App;