'use client';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import WherePage from './WherePage';

export default function Where() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => setLoading(true), 1000);
	}, []);
	return <>{!loading ? <Loader /> : <WherePage />}</>;
}
