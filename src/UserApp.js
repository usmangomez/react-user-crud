import React from 'react'

import { NavbarApp } from './shared/NavbarApp';
import { UserListApp } from './components/UserListApp';

export const UserApp = () => {
    return (
        <>
            <NavbarApp />
            <div className="container py-3">
                <UserListApp />
            </div>
        </>
    )
}
