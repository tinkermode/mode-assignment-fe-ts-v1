import React from 'react';
import { User } from './SpotifyApi';

/**
 * The interface for the global app context
 */
export interface SpotifyAppContext {
    // The auth token used for API calls
    token?: string | undefined;

    // The current logged in user
    user?: User | undefined;
}

export const initialAppContext:SpotifyAppContext = {};

export const spotifyAppContext = React.createContext<SpotifyAppContext>(initialAppContext);
