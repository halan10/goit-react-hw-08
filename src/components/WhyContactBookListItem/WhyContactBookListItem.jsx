import Paper from '@mui/material/Paper';

import css from './WhyContactBookListItem.module.css';

export default function WhyContactBookListItem({ item }) {
  return (
    <Paper className={css.paper}>
      <img src={item.icon} alt="Avatar" width="148" />
      <h3>{item.title}</h3>
      <p className={css.description}>{item.description}</p>
    </Paper>
  );
}
