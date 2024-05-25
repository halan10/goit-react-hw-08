import css from './CustomButton.module.css';

export default function CustomButton({ type, name, handleClick }) {
  return (
    <button type={type} className={css.button} onClick={handleClick}>
      {name}
    </button>
  );
}
