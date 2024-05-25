import WhyContactBookListItem from '../WhyContactBookListItem/WhyContactBookListItem';

import useMediaQuery from '@mui/material/useMediaQuery';

import css from './WhyContactBookList.module.css';

export default function WhyContactBookList({ data }) {
  const mobileSize = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <>
      <h2 className={css.title}>Why ContactBook?</h2>
      <ul className={mobileSize ? css.mobileContainer : css.container}>
        {data.map(item => (
          <li
            key={item.id}
            className={mobileSize ? css.mobileListItem : css.listItem}
          >
            <WhyContactBookListItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
