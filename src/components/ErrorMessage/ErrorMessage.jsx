import { MdErrorOutline } from 'react-icons/md';

import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.errorMessage}>
      <MdErrorOutline
        size={80}
        style={{
          color: 'red',
        }}
      />
      <p className={css.error}>Oops! Something went wrong!</p>
    </div>
  );
}
