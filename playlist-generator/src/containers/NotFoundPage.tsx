import React from 'react';
import { Redirect } from 'react-router-dom';

export const NotFoundPage:React.FC = () => {
    return (
        <Redirect to="/" />
    );
};
