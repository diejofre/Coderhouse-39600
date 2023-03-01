const Button = ({ text, number, handleClick }) => {
  return (
    <button onClick={() => handleClick(text)}>
      {text} {number}
    </button>
  );
};

export default Button;
