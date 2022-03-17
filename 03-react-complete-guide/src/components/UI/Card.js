function Card(props) {
  const { children, className } = props;
  const classes = "expneses " + className;
  return <div className={classes}>{children}</div>;
}

export default Card;
