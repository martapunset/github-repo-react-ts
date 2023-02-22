

import React, { createContext, useContext, useState, useEffect } from 'react';
import { ReactNode } from 'react';
interface MyContextType {

  isMobile: boolean;
  handleWindowSizeChange: ()=>void;
 
}
interface Props {
  children: ReactNode;
}
export const AppContext = createContext<MyContextType>({
  isMobile: false,
  handleWindowSizeChange: () => { }
});



export const AppProvider: React.FC<Props> = ({ children} ) => {
  
  const [width, setWidth] = useState<number>(window.innerWidth);

function handleWindowSizeChange():void {
  setWidth(window.innerWidth);
  console.log("calling handlewindowsize")
}

  let isMobile:boolean = width <= 768;
  console.log(isMobile)
    /*
    useEffect(() => {
        
        
        const memesAsync = async () => {
            const response = await searchMemes(query)
            setList(response)
            console.log("providerresponse",response)
       console.log("query",query)
        }
        
        if (query.length>3) memesAsync();
      }, [query]);
      */
    
  return (
    <AppContext.Provider
      value={{isMobile, handleWindowSizeChange
            
            

        // resetCurrentTrack,
        
        //fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );

}

