import { useDispatch, useSelector } from "react-redux";

import { selectFilter, setFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectFilter);
  const searchValue = useSelector(selectFilter);
  console.log(searchValue);
  const handleChange = (event) => {
    dispatch(setFilter(event.target.value.trim().toLowerCase()));
  };
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={handleChange} value={filter} />
    </div>
  );
};
export default SearchBox;
