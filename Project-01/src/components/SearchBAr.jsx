import { useState } from 'react'
import { useDispatch } from "react-redux";
import { setQuery } from '../redux/features/searchSlice';
import { Link } from 'react-router-dom';


const SearchBar = () => {
  const [text, setText] = useState('')
  
  const dispatch = useDispatch()

  const submitHandler = (e)=>{
    e.preventDefault()

    dispatch(setQuery(text))

    setText('')
  }

  return (
    <div className="SearchBar">
      <Link to={'/'}  className='text-2xl font-bold'>P̶нσтσѕ__丂тσ¢к</Link>
      <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="">
        <input value={text} onChange={(e)=>{
          setText(e.target.value)
        }} required type="text" placeholder="Search anything..." id="" />
        <button type='submit' className="active:scale-90">Search</button>
      </form> 
      <div className='collection active:scale-90'>
        <Link to='/Collection'><span>回</span> Collection</Link>
      </div>
    </div>
  );
};

export default SearchBar;
