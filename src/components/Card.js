function Card({ title, content, Image }) {
  return (
    <div className="card shadow-lg ">
      <div className="card-content p-0">
        <img src={Image} width={"100%"} height={"250vh"}/>
        <h4 className="p-2">{title}</h4>
        <p className="px-2 py-1">{content}</p>
      </div>
    </div>
  );
}

export default Card;
