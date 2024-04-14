const Button = ({ onClick }: { onClick: () => void }) => {
  return <div className="button" onClick={onClick} />;
};

export default Button;
