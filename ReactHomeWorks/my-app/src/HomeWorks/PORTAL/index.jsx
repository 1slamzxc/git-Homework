import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PortalComponent = () => {
    const [Portal, setPortal] = useState(false);
  
    const Toggle = () => {
      setPortal(!Portal);
    };


    const portalContainer = document.getElementById('portal-root');
  
    return (
      <div>
        <button onClick={Toggle}>БТН ПОРТАЛ</button>
        {Portal &&
          ReactDOM.createPortal(
            <div>
              <p>ПОРТАЛ</p>
            </div>,
            portalContainer
          )}
      </div>
    );
  };

export default PortalComponent