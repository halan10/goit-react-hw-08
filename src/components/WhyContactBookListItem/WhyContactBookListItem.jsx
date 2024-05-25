import css from './WhyContactBookListItem.module.css';

export default function WhyContactBookListItem({ item }) {
  return (
    <div className={css.paper}>
      <img src={item.icon} alt="Avatar" width="148" />
      <h3>{item.title}</h3>
      <p className={css.description}>{item.description}</p>
    </div>
  );
}
