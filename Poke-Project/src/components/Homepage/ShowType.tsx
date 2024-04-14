const ShowType = ({ type }: { type: string }) => {
  return <div className={"type " + type}>{type}</div>;
};

export default ShowType