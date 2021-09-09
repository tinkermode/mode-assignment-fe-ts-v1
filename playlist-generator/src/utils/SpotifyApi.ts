/* eslint-disable camelcase */

/**
 * You must create a Spotify App here https://developer.spotify.com/dashboard/applications and replace this CLIENT_ID with your App's CLIENT_ID.
 * Also, you must add 'http://localhost:3000/callback' as one of your app's 'Redirect URIs'
 */
export const CLIENT_ID = 'CHANGE THIS TO YOUR CLIENT ID';
export const REDIRECT_URI = 'http://localhost:3000/callback';

export const LOGIN_URL = 'https://accounts.spotify.com/authorize';
export const SPOTIFY_API_BASE = 'https://api.spotify.com/v1';
export const SCOPES = [
    'user-read-private',
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-follow-read',
    'user-follow-modify',
];

/**
 * Below are the interfaces for the Spotify's data objects. NOTE that these interfaces are NOT complete, they do have more attributes
 * than specified below. Some of the attributes are not included here are because they are not used by this app. Feel free to add
 * missing attributes as necessary.
 */

/**
 * The interface for a User object
 */
export interface User {
    readonly id: string;
    readonly display_name: number;
    readonly images?: readonly {
        readonly width: number | null;
        readonly height: number | null;
        readonly url: string;
    }[];
}

/**
 * The interface for 1 single playlist object
 */
export interface Playlist {
    readonly description: string;
    readonly id: string;
    readonly images: readonly {
        readonly width: number;
        readonly height: number;
        readonly url: string;
    }[];
    readonly name: string;
    readonly type: string;
}

/**
 * This is the interface for the Spotify's Playlists object.
 */
export interface Playlists {
    readonly items: readonly Playlist[];
}

export interface Album {
    readonly id: string;
    readonly images: readonly {
        readonly width: number;
        readonly height: number;
        readonly url: string;
    }[];
    readonly name: string;
    readonly total_tracks: number;
    readonly type: string;
}

export interface Artist {
    id: string;
    name: string;
    type: string;
}

export interface Track {
    readonly album: Album;
    readonly artists: readonly Artist[];
    readonly duration_ms: number;
    readonly id: string;
    readonly name: string;
    readonly track: boolean;
    readonly track_number: number;
    readonly type: string;
}
