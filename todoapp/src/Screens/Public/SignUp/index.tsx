import React from 'react';
import { Layout, Main } from '../../../components'
import { FormSignUp } from './components/FormSignUp';


const SignUp = () => {
    return (
        <Layout hideHeader hideAside>
            <Main showAddButton>
                <FormSignUp />
            </Main>
        </Layout>
    );
}

export { SignUp };
