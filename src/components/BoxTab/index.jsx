// Importing necessary dependencies and components
import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { SiPix } from 'react-icons/si';
import { PiCreditCard } from 'react-icons/pi';
import { BsQrCode } from 'react-icons/bs';

// Functional component BoxTab
export function BoxTab({ onClick, ...rest }) {
  // State for active tab and screen width
  const [activeTab, setActiveTab] = useState('Pix');
  const [isAbove768px, setIsAbove768px] = useState(window.matchMedia('(min-width: 768px)').matches);

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Effect to handle media query changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = (e) => setIsAbove768px(e.matches);

    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  // JSX to render the component
  return (
    <Container>
      <div className="tabs">
        {/* Tab for Pix */}
        <div
          className={`tab ${activeTab === 'Pix' ? 'active' : ''}`}
          onClick={() => handleTabClick('Pix')}
        >
          <SiPix size={24}/>
          <p>Pix</p>
        </div>

        {/* Tab for Credit */}
        <div
          className={`tab ${activeTab === 'Credito' ? 'active' : ''}`}
          onClick={() => handleTabClick('Credito')}
        >
          <PiCreditCard size={24}/>
          <p>Crédito</p>
        </div>
      </div>

      <div className="content">
        {/* Render QR code for Pix */}
        {activeTab === 'Pix' && isAbove768px && (
          <BsQrCode size={270} />
        )}
        {activeTab === 'Pix' && !isAbove768px && (
          <BsQrCode size={180} />
        )}

        {/* Render Credit Card form */}
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
  );
}
