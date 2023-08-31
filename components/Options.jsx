import styles from "../style.module.css";
const Options = ({ options }) => {
  return (
    <div className={styles.options}>
      <div>
        <input type="radio" name="question" id="1" />
        <label htmlFor="1">{options[0]}</label>
      </div>
      <div>
        <input type="radio" name="question" id="2" />
        <label htmlFor="2">{options[1]}</label>
      </div>
      <div>
        <input type="radio" name="question" id="3" />
        <label htmlFor="3">{options[2]}</label>
      </div>
      <div>
        <input type="radio" name="question" id="4" />
        <label htmlFor="4">{options[3]}</label>
      </div>
    </div>
  );
};
export default Options;
