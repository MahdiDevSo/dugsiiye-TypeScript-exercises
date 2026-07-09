import { useState } from "react";

type AgeFormProps = {
  onSubmit: (age: number) => void;
};

const Age_Form = ({onSubmit} : AgeFormProps) => {

    const [age, setAge] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (age < 18) {
      alert("You must be at least 18.");
      return;
    }

    onSubmit(age);
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={age}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setAge(Number(event.target.value))
        }
      />

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Age_Form