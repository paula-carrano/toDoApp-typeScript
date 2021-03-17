import { AuthContext } from '../../../contexts/AuthProvider';
import React, { useContext } from 'react';
import { Layout, Main } from '../../../components';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <Layout>
            <Main showAddButton title={`Bienvenido ${user.displayName}`}>
            </Main>
        </Layout>
    );
}

export { Dashboard };
