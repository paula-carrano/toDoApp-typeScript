import React, { FC } from 'react';
import { Layout, Main } from '../../../components'
import { FormSignUp } from './components/FormSignUp';


const SignUp: FC = () => {
    return (
        <Layout hideHeader hideAside>
            <Main showAddButton>
                <FormSignUp />
            </Main>
        </Layout>
    );
}

export { SignUp };
