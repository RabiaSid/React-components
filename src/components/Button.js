function Button({ label, onClick }) {
  return <button onClick={onClick} type="button" className="btn btn-outline-primary">{label}</button>;
}

export default Button;
