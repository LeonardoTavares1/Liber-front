import React from 'react';
import { Foter } from '../Components/footer/Footer.jsx';
import { App } from '../Components/Navbar/Navbar.jsx';
import { Centro, Conteudo, Principal } from './Style.jsx';

export function Home(){
    return(
            <Conteudo >
                <App />
                <Centro>
                    
                    <Principal>

                    </Principal>
                    
                </Centro>
                <Foter />
           </Conteudo>
        
    )
}