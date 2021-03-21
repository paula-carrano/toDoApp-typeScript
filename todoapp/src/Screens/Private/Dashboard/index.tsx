import { AuthContext } from '../../../contexts/AuthProvider';
import React, { useContext, FC } from 'react';
import { Layout, Main } from '../../../components';

const Dashboard: FC = () => {
    // const { user } = useContext(AuthContext)
    return (
        <Layout>
            <Main showAddButton title={`Bienvenido {//user.displayName}`}>
            </Main>
        </Layout>
    );
}

export { Dashboard };
