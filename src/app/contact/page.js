import React from 'react';
import Formulaire from "@/app/compoments/Formulaire";
export const metadata = {
    title: 'TBST Development',
    description: 'TBST Development is a software company' +
        'which makes software',
}
function Page() {
    return (
        <main>
            <div className='flex justify-center p-5'>
                    <Formulaire/>
            </div>
        </main>
    );
}

export default Page;