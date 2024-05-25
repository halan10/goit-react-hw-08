import css from './PageTitle.module.css';

export default function PageTitle({ title, description }) {
  return (
    <div className={css.description}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
