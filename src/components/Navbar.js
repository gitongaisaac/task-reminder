const Navbar = () => {
  return (
    <div className="navbar">
      <div className="title">
        <h1>
          Task <span className="">Reminder</span>
        </h1>
      </div>
      <button
        className="btn btn-add"
        onClick={(e) => {
          const navbar = e.target;
          const create =
            navbar.parentElement.parentElement.children[1].children[0];

          create.classList.toggle("hide");
          navbar.classList.toggle("btn-close");

          if (create.classList.contains("hide")) {
            navbar.innerText = "Add";
          } else {
            navbar.innerText = "Close";
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Navbar;
