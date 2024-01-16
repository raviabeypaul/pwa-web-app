import ReactDOM from 'react-dom';
import {App} from './App';
import registerServiceWorker from './serviceWorkerRegisteration';

ReactDOM.render(<App/>, document.getElementById('root'));

registerServiceWorker()