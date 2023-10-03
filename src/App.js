import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const data =useSelector(state => state);
  const Dispatch =useDispatch();
  const F1=(data)=>{
    Dispatch({type:'setcount' ,set:data})
  }
  console.log(data);
  return (
    <div className='row fs-1 m-5 w-50 '>
      <div className='col-3 '>
        <a class="btn btn-primary w-100 fs-1" onClick={()=>F1(data.count-1)}  href="#" role="button">-</a>
      </div>
      <div className='col-6 text-center'>{data.count}</div>
      <div className='col-3'>
        <a class="btn btn-primary w-100 fs-1" onClick={()=>F1(data.count+1)} href="#" role="button">+</a>
      </div>
    </div>
  );
}

export default App;
