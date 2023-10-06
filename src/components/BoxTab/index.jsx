import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Input } from "../Input"
import { Button } from "../Button"

import { SiPix } from 'react-icons/si'
import { PiCreditCard } from 'react-icons/pi'
import { BsQrCode } from 'react-icons/bs'

export function BoxTab({ onClick, ...rest }){
    const [activeTab, setActiveTab] = useState('Pix');
    const [isAbove768px, setIsAbove768px] = useState(window.matchMedia('(min-width: 768px)').matches);
    
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = (e) => setIsAbove768px(e.matches);

    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

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
            {activeTab === 'Pix' && isAbove768px && (
                <BsQrCode size={270} />
            )}
            {activeTab === 'Pix' && !isAbove768px && (
                <BsQrCode size={180} />
            )}
            {activeTab === 'Credito' && (
                <div>
                <Input labelName="Número do Cartão" placeholder="0000 0000 0000 0000" />
                <div className="secondrow">
                    <Input labelName="Validade" placeholder="04/25" />
                    <Input labelName="CVC" placeholder="000" />
                </div>
                <Button title="Finalizar pagamento" onClick={onClick}/>
                </div>
            )}
            </div>
        </Container>
    )
}