import { Layout, Main } from '../../../components';
import React from 'react';
import { Avatar } from './Avatar';


const Profile = () => {

    return (
        <Layout>
            <Main showAddButton>
                <Avatar />
            </Main>
        </Layout>
    );
}

export { Profile };
