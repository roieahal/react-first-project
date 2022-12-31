import { useFormik } from "formik";
const AddMovies = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      rating: "",
      genre: "",
    },
  });
  console.table(formik.values);

  const styleform = {
    fontFamily: "Arial, Helvetica, sans-serif",
    position: "fixed",
    width: "50vw",
    top: "10vh",
    left: "20vw",
    height: "68vh",
    overflowY: "auto",
    scrollbarWidth: "thin",
    boxShadow: "0px 0px 15px 7px firebrick",
    backgroundColor: "rgb(30, 24, 24)",
    color: "white",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
  };
  const formStyle = {
    gap: "27px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={styleform} className="m-5">
      <h1>Add movies</h1>
      <form onSubmit={(event) => props.onsubmit(event, formik.values)} style={formStyle}>
        <div>
          <label className="form-labe"> Movie name </label>
          <input className="form-control" type="text" name="name" id="firstname" value={formik.values.name} onChange={formik.handleChange} />
        </div>
        <div>
          <label className="form-labe"> Rating </label>
          <select className="form-control" name="rating" id="" value={formik.values.rating} onChange={formik.handleChange}>
            <option value="0">...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label className="form-labe"> Genre </label>
          <select className="form-control" name="genre" id="" value={formik.values.genre} onChange={formik.handleChange}>
            <option value="non">...</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
          </select>
        </div>

        <button type="submit" className="mt-3 btn btn-primary">
          Add movie
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
