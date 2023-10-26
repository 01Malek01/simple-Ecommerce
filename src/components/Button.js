import './external styles/default-btn.css';
export default function Button({ value, title, onClick, children }) {

  return (
    <>
      <button onClick={onClick} value={value} className="btn-component ">
        {title}
      {children}
      </button>
    </>
  );
}
