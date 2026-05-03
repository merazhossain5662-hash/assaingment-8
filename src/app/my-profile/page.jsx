"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';

const profilePage = () => {
     const { data: session } = authClient.useSession();
        const user =session?.user;
    return (
        <div>
            
        </div>
    );
};

export default profilePage;