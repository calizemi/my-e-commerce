import React from 'react';
import Navbar from '../components/NavBar';
import Footer from "../components/Footer/Footer"
import { Outlet } from 'react-router-dom';

const Layout = () => {

	return (
		<div >
			<Navbar />
            <section>
                <Outlet />
            </section>
            <Footer />
		</div>
	);
}

export default Layout;