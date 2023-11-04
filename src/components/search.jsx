import React, {useState} from "react";
import './style.css';
import data from "../data/templateData.json"


function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input className='w-[60rem] mx-auto p-2 border-[2px] border-green-500 text-green-500 rounded-2xl'  id="searchInput" type="text" placeholder="Search For Life Hacks... " onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </div>

        <div className="flex mt-6">
        <ul className='flex flex-row mx-auto gap-16'>
          <li className="text-lg font-semibold bg-green-600 max-w-fit p-1 px-3 rounded-2xl text-white">Explore</li>
          <li className="text-lg font-semibold border border-black max-w-fit p-1 rounded-2xl px-3">Mobility</li>
          <li className="text-lg font-semibold border border-black max-w-fit p-1 rounded-2xl px-3">Sports</li>
          <li className="text-lg font-semibold border border-black max-w-fit p-1 rounded-2xl px-3">Kitchen</li>
          <li className="text-lg font-semibold border border-black max-w-fit p-1 rounded-2xl px-3">Social</li>
          <li className="text-lg font-semibold border border-black max-w-fit p-1 rounded-2xl px-3" >Others</li>
        </ul>
       </div>





        <div className="template_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="template" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3 className="text-lg font-semibold  ">{val.title}</h3>
                      <h2 className="text-base font-light ">{val.desc} </h2>
                      <p className="price">views :{val.views}</p>
                      <button className="text-lg bg-green-500 max-w-fit px-2 py-1 rounded-lg text-white"> Play</button>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Search;