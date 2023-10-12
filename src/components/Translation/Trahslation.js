// import React, { useEffect, useState } from 'react';
// import Transition from './../Translation/Data.json';

// const Translation = (Transition) => {
//   const [language, setLanguage] = useState('EN');
//   const [content, setContent] = useState({});
//   // const [t, i18n] = useTranslation('global');
//   const [showModal, setState] = useState(false);
//   //  state = {
//   //   showModal: false,
//   // };

//   useEffect(() => {
//     if (language === 'EN') {
//       setContent(Transition.en);
//     } else if (language === 'UK') {
//       setContent(Transition.uk);
//     } else if (language === 'RU') {
//       setContent(Transition.ru);
//     }
//   });
    
//     return (
//       <>
//         <select
//           value={language}
//           onChange={e => {
//             setLanguage(e.target.value);
//           }}
//         >
//           <option>EN</option>
//           <option>UK</option>
//           <option>RU</option>
//         </select>
//       </>
//     );
// };

// export default Translation;
