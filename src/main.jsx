import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import { Provider } from 'react-redux'
import { Store } from './services/store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <App />
    </Provider>
)


