export default function Proj(proj) {
  console.log(proj);
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <div>
      <a href={proj.props.deployed} className="proj-anch">
        <img
          id={proj.props.title}
          className="proj-hero"
          src={proj.props.imgSrc}
          alt={proj.props.title}
        />
        <h3 className="proj-title">{proj.props.title}</h3>
      </a>
    </div>
  );
}
