import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/Global.styled';
import { LanguageProvider } from './i18n';

createRoot(document.getElementById('root')!).render(<StrictMode><LanguageProvider><GlobalStyle /><App /></LanguageProvider></StrictMode>);
