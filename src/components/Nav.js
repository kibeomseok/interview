import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    const [isView, setIsView] = useState(false)
    const [isView1, setIsView1] = useState(false)
    const [isView2, setIsView2] = useState(false)
    const handleClick = (e) => {
        e.stopPropagation();
        setIsView(true);
    }

  return (
    <>
        <div className="fixed top-0 left-0 w-48 h-full border-r p-5">
            <NavLink to={'/'}>
                <img src="https://via.placeholder.com/120x50" alt="120x50" />
            </NavLink>
            <ul className="cursor-pointer" onClick={()=>{setIsView(!isView)}}>React
                {
                    isView &&
                    <>
                        <li className="" onClick={handleClick}>
                            <NavLink to={'/React/StatusM'}>- 상태관리</NavLink>
                        </li>
                        <li className="" onClick={handleClick}>
                            <NavLink to={'/React/LifeCycle'}>- 라이프사이클</NavLink>
                        </li>
                    </>
                }
            </ul>
            <ul className="cursor-pointer" onClick={()=>{setIsView1(!isView1)}}>JavaScript</ul>
            <ul className="cursor-pointer" onClick={()=>{setIsView2(!isView2)}}>HTML,CSS</ul>
        </div>
    </>
  )
}

export default Nav