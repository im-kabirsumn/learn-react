

const Button = () => {
  const styles = {
    background: "coral",
    color: "#333",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none"
  };
  return (
    <>

      <button className="button">This is external CSS style example</button>
      <button style={styles}>This is internal CSS style example</button>
      <button className="button">This is module CSS style example</button>
    </>
  );
};

export default Button;
