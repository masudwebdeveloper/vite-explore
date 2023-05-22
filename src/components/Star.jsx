const Star = ({value, filled, onClick}) => {
  const starStyle = {
    cursor: 'pointer',
    color: filled ? 'gold' : 'lightgray'
  };

  return (
    <span style={starStyle} onClick={() => onClick(value)}>
      &#9733;
    </span>
  );
};
  

export default Star;

