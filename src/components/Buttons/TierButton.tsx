interface TierButtonProps {
  clickHandler: () => void;
  selected: boolean;
}

const style = {
  button: {
    background: "#1eaa17",
  },
};

export function TierButton({ clickHandler, selected }: TierButtonProps) {
  return (
    <button style={selected ? style.button : {}} onClick={clickHandler}>
      {selected ? "Selected ✔" : "Select"}
    </button>
  );
}
