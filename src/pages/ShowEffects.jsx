import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hover from '../components/Hover';
import List from '../components/List';

export const ShowEffects = () => {
	const navigate = useNavigate()
	return (
	<div className="effects-container">
		<button onClick={() => navigate('/')}>Go to Comments</button>
		<Hover />
		<List />
    </div>
	)
}