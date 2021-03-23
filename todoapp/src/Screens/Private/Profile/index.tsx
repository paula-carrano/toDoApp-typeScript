import { Layout, Main } from '../../../components';
import React, { FC } from 'react';
import { Avatar } from './Avatar';


const Profile: FC = () => {

    return (
        <Layout>
            <Main showAddButton>
                <Avatar />
            </Main>
        </Layout>
    );
}

export { Profile };
