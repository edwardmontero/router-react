import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
function App() {
	return (
		<div>
			<BrowserRouter>
				<AuthProvider>
					<AppRouter />
				</AuthProvider>
			</BrowserRouter>
			<ToastContainer />
		</div>
	);
}

export default App;
