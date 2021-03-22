import React, { FC } from 'react';
import { Layout, Main } from '../../../components'
import { FormLogin } from './components';

const Login: FC = () => {
    return (
        <Layout hideHeader hideAside>
            <Main showAddButton>
                <FormLogin />
            </Main>
        </Layout>
    );
}

export { Login };
