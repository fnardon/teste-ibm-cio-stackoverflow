import React from 'react';
import { ContainerPage, TitlePage } from '../../components/Main';
import Search from '../../components/search';

const Page = () => {
    return (
        <ContainerPage>
            <TitlePage>
               <Search/>
            </TitlePage>
        </ContainerPage>
    );

}
export default Page;