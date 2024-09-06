type Props = {
    day: string;
    value: string;
    checked: boolean;
    onChange: () => void;
  };
  
  const Checkbox = (props: Props) => {
    return (
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text mr-1">{props.day}</span>
          <input
            type="checkbox"
            value={props.value}
            checked={props.checked}
            onChange={props.onChange}
            className="checkbox"
          />
        </label>
      </div>
    );
  };
  
  export default Checkbox;
  