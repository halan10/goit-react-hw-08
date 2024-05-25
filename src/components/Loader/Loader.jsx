import { Triangle } from 'react-loader-spinner';

import css from './Loader.module.css';

export default function Loader() {
  return (
    <Triangle
      visible={true}
      height="100"
      width="100"
      color="rgb(239, 138, 1)"
      ariaLabel="triangle-loading"
      wrapperStyle={{}}
      wrapperClass={css.wrapper}
    />
  );
}
