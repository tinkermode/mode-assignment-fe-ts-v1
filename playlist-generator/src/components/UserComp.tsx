import React from 'react';
import { User } from '../utils/SpotifyApi';

export interface UserCompProps {
    readonly user:User;
}

export const UserComp:React.FC<UserCompProps> = ({ user }:UserCompProps) => {
    return (
        <div className="user-info">
            {user.images && user.images.length > 0 && (
                <img className="user-image" src={user.images[0].url} alt={user.images[0].url} />
            )}
            <div className="user-name">{user.display_name}</div>
        </div>
    );
};
