'use client';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import HomePage from './home/HomePage';

export default function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	}, []);
	return <>{!loading ? <Loader /> : <HomePage />}</>;
}
