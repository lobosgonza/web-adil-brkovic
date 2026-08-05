import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { WhatsAppCTA } from './components/WhatsAppCTA'; // Verifica si es exportación nombrada o default

import Home from './pages/Home';
import Trayectoria from './pages/Trayectoria';
import ServicioTemplate from './pages/ServicioTemplate';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import NotFound from './pages/NotFound';
import AreasTrabajoHub from './pages/AreasTrabajoHub';

const ScrollToTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

const pageVariants = {
	initial: { opacity: 0, scale: 0.99 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 1.01 },
};

const pageTransition = {
	duration: 0.4,
	ease: [0.43, 0.13, 0.23, 0.96],
};
// En App.jsx
const isServer = typeof window === 'undefined' || window.__IS_PRERENDER__;

const PageWrapper = ({ children }) => {
	// Si estamos prerenderizando, devolvemos el HTML estático limpio sin opacidad 0
	if (isServer) {
		return <>{children}</>;
	}

	return (
		<motion.div initial='initial' animate='animate' exit='exit' variants={pageVariants} transition={pageTransition}>
			{children}
		</motion.div>
	);
};
function App() {
	const location = useLocation();

	return (
		<>
			<ScrollToTop />
			<div className='flex flex-col min-h-screen antialiased font-sans selection:bg-orange-500/30'>
				<Navbar />

				<main className='flex-grow'>
					<AnimatePresence mode='wait'>
						<Routes location={location} key={location.pathname}>
							<Route
								path='/'
								element={
									<PageWrapper>
										<Home />
									</PageWrapper>
								}
							/>
							<Route
								path='/trayectoria'
								element={
									<PageWrapper>
										<Trayectoria />
									</PageWrapper>
								}
							/>
							<Route
								path='/areas-de-trabajo'
								element={
									<PageWrapper>
										<AreasTrabajoHub />
									</PageWrapper>
								}
							/>
							<Route
								path='/areas-de-trabajo/:id'
								element={
									<PageWrapper>
										<ServicioTemplate />
									</PageWrapper>
								}
							/>
							<Route
								path='/politica-de-privacidad'
								element={
									<PageWrapper>
										<PoliticaPrivacidad />
									</PageWrapper>
								}
							/>
							<Route
								path='*'
								element={
									<PageWrapper>
										<NotFound />
									</PageWrapper>
								}
							/>
						</Routes>
					</AnimatePresence>
				</main>

				<WhatsAppCTA />
				<Footer />
			</div>
		</>
	);
}

export default App;
