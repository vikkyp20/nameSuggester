import  React  from 'react';
import './Header.css';

const Header=({headTitle , headerExpanded})=>{
    return(
         <div className="head-container">
             <img src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' 
             className={ `header-image ${
                     headerExpanded 
                     ?  'header-image-expanded' 
                     :'header-image-contracted'}`}
             alt="header-image"
             />

             <h1 className="header-text">{headTitle}</h1>
            
         </div>
    );
};


export default Header;