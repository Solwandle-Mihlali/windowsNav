import React from 'react';
import './windowsSearch.css';

interface WinSearchProps {
  isVisible: boolean;
}

const WindowsSearch: React.FC<WinSearchProps> = ({ isVisible }) => {
  return (
    isVisible && (
      <div className='winSearchCont'>
        <form action="">
          <input type="text" placeholder='Search' />
          <br />
          <br />
           <section className="pinnedAppsSection">
            <div className="pinnedAppsSectionChildren">
               <p>Pinned</p>
            </div>
            <div className="pinnedAppsSectionChildren">
              
              </div>
           </section>
          <div className="recentAPppCOntainers">
          
          </div>

        </form>
      </div>
    )
  );
};

export default WindowsSearch;