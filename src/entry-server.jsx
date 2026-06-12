import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export function render(url = '/', helmetContext = {}) {
	return renderToString(
		<HelmetProvider context={helmetContext}>
			<MemoryRouter initialEntries={[url]}>
				<App />
			</MemoryRouter>
		</HelmetProvider>,
	);
}
