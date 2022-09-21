import './App.css';
import Navbar from './components/Navbar';
import { useState } from 'react';
import GetContract from './hooks/GetContract';
import Events from './components/Events';
function App() {

  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const contract = GetContract();

  const Sum=async()=>{
    const sum = await contract.getSum(a,b);
    console.log(sum);
  }
  return (
    <>
    <div className='absolute z-1' >
      <Navbar/>
    </div>
    <div className='flex flex-col justify-center items-center bg-slate-900 w-screen h-screen' >
      <p className='text-3xl font-extrabold text-white' >Smart Contract Events Logger</p>
      <div className='flex flex-row items-center mt-4' >
        <label className='text-white font-semibold text-2xl mr-2' >Number 1 : </label>
        <input className=' bg-slate-900 border-[2px] border-slate-700 rounded-xl px-4 py-2 text-xl text-white' onChange={(e)=>setA(e.target.value)} />
      </div>
      <div className='flex flex-row items-center mt-4' >
        <label className='text-white font-semibold text-2xl mr-2' >Number 2 : </label>
        <input className=' bg-slate-900 border-[2px] border-slate-700 rounded-xl px-4 py-2 text-xl text-white' onChange={(e)=>setB(e.target.value)} />
      </div>
      <button className='bg-white text-slate-900 px-5 py-2 rounded-xl mt-4 ' onClick={()=>Sum()}  >Get Sum</button>
    <Events/>
    </div>
    </>
  );
}

export default App;
