import './styles/App.scss';
import Banner from './component/Banner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Action from './component/Action';
import Footer from './component/Footer';
function App() {
    return (
        <div className='App'>
            <Banner />
            <Action/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
}
export default App;