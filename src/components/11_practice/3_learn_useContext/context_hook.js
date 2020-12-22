import React from 'react';
import Learn_Context_CompA from './LearnContext_Comp_A';
import Learn_Context_CompB from './LearnContext_Comp_B';
import Learn_Context_CompC from './LearnContext_Comp_C';

export const user_context = React.createContext();
export const address_context = React.createContext();

 function ContextHook(props) {
    
    return (
       <div>
           This is Context Hook Example !!!
           <Learn_Context_CompA />
           <br/> <br/>
           <Learn_Context_CompB />
           <br/> <br/>
           <user_context.Provider value="Swatantra_Sinha">
               <address_context.Provider value="Bangalore">
                    <Learn_Context_CompC />
                </address_context.Provider>
           </user_context.Provider>
          
           <br/>

       </div>
    )
}

export default ContextHook;
