import { useState } from "react";
import { Container } from "./styles";

import { SiPix } from 'react-icons/si'
import { PiCreditCard } from 'react-icons/pi'
import { BsQrCode } from 'react-icons/bs'

export function BoxTab(){
    const [activeTab, setActiveTab] = useState('Pix');
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

    return(
        <Container>
            <div className="tabs">
                <div
                    className={`tab ${activeTab === 'Pix' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Pix')}
                >
                    <SiPix size={24}/>
                    <p>Pix</p>
                </div>
                <div
                    className={`tab ${activeTab === 'Credito' ? 'active' : ''}`}
                    onClick={() => handleTabClick('Credito')}
                >
                    <PiCreditCard size={24}/>
                    <p>Crédito</p>
                </div>
            </div>
            <div className="content">
            {activeTab === 'Pix' && (
                <BsQrCode size={270}/>
            )}
            {activeTab === 'Credito' && (
                <div>
                <input type="text" placeholder="Input 1" />
                <input type="text" placeholder="Input 2" />
                <input type="text" placeholder="Input 3" />
                <button>Submit</button>
                </div>
            )}
            </div>
        </Container>
    )
}