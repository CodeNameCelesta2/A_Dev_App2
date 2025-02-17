function InputField({ value, onChange }) {
    return (
      <input
        type="number"
        value={value}
        onChange={onChange}
        placeholder="Enter number"
      />
    );
  }
  
  export default InputField;
  