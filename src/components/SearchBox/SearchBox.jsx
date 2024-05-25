import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';

import css from './SearchBox.module.css';

export default function SearchBox() {
  const mobileSize = useMediaQuery('only screen and (max-width : 768px)');

  const searchId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => dispatch(changeFilter(e.target.value));

  return (
    <div className={mobileSize ? css.mobileSearchForm : css.searchForm}>
      <InputBase
        id={searchId}
        value={filter}
        onChange={handleFilterChange}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Find contacts by name"
        inputProps={{
          style: {
            padding: '10px',
            color: 'white',
            width: '350px',
            borderRadius: '16px',
            boxShadow: '1px 2px 20px rgba(169, 198, 217, 0.29457423)',
          },
        }}
        className={mobileSize ? css.mobileInput : css.input}
      />
      {!mobileSize && (
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon style={{ color: 'white' }} />
        </IconButton>
      )}
    </div>
  );
}
