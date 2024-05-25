import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import useMediaQuery from '@mui/material/useMediaQuery';

import css from './Layout.module.css';

export default function Layout({ children }) {
  const mobileSize = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <div>
      <AppBar />
      <div className={mobileSize ? css.mobileContainer : css.container}>
        <Suspense fallback={null}>{children}</Suspense>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
