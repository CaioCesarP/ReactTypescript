import style from "./noItem.module.scss";


export default function NoItem() {
  return (
    <li
      className={`${style.item}`}
    >
      <h3>SEM ATIVIDADE</h3>
    </li>
  );
}
