// // ThemeProvider.js
// import React, { createContext, useState } from 'react';

// const StyleVarContext = createContext({
//   color: 'red'
// });

// const StyleVarProvider = ({ children }: {children: React.ReactNode}) => {
//   // State untuk menyimpan informasi tema
//   const [theme, setTheme] = useState({
//     color: 'blue', // Gantilah dengan properti tema yang sesuai
//   })
//   return (
//     <StyleVarContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </StyleVarContext.Provider>
//   );
// };

// export  StyleVarProvider;
