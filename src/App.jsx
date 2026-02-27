import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Importación de Componentes Globales
// (Martín deberá crear estos archivos en src/components/)
// --- IMPORTACIONES DE COMPONENTES ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA'; // Con llaves porque es Named Export

// --- IMPORTACIONES DE PÁGINAS ---
import Home from './pages/Home';
import Trayectoria from './pages/Trayectoria';
import ServicioTemplate from './pages/ServicioTemplate';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'; // Asegúrate que el archivo se llame así
import NotFound from './pages/NotFound';

import AreasTrabajoHub from './pages/AreasTrabajoHub';

// Función para resetear el scroll al cambiar de página
const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

function App() {
	return (
		<Router>
			<ScrollToTop />

			{/* Contenedor principal con Flexbox para que el footer siempre esté abajo */}
			<div className='flex flex-col min-h-screen antialiased font-sans selection:bg-brand-gold/30'>
				{/* Navegación Superior */}
				<Navbar />

				{/* Contenido Dinámico */}
				<main className='flex-grow'>
					<Routes>
						{/* Página de Inicio */}
						<Route path='/' element={<Home />} />

						{/* Página de Trayectoria e Hitos */}
						<Route path='/trayectoria' element={<Trayectoria />} />

						{/* Template para los 5 servicios (Usa el ID del CSV) */}
						<Route path='/servicio/:id' element={<ServicioTemplate />} />

						{/* Página de Políticas Legales */}
						<Route path='/politica-de-privacidad' element={<PoliticaPrivacidad />} />

						<Route path='/areas-de-trabajo' element={<AreasTrabajoHub />} />
						{/* Error 404 - Si la ruta no existe */}
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>

				{/* Botón de WhatsApp flotante */}
				<WhatsAppCTA />

				{/* Pie de página */}
				<Footer />
			</div>
		</Router>
	);
}

export default App;
