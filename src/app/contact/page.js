import React from 'react';
import Formulaire from "@/app/compoments/Formulaire";
export const metadata = {
    title: 'Contactez-nous',
    description: 'TBST Development',
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