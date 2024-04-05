import { useState } from "react";

type NumInputProps = {
  no: number;
  func: (id: number) => void;
};

const NumInput = ({ no, func }: NumInputProps) => {
  const [id, setId] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setId(Number(e.target.value));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    func(id);
  };

  return (
    <div>
      <input
        type="number"
        className="screen num-input"
        placeholder={no.toString()}
        onChange={handleChange}
      />
      <div className="submit" onClick={handleClick} />
    </div>
  );
};

export default NumInput;