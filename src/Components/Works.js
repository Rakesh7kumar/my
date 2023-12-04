import React from 'react'
import './style/Works.css';
import work1 from '../Components/Img/work1.jpg'
import work2 from '../Components/Img/work2.jpg'
import work3 from '../Components/Img/work3.jpg'
import work4 from '../Components/Img/work4.jpg'
import work5 from '../Components/Img/work5.jpg'
import work6 from '../Components/Img/work6.jpg'

const Works = () => {
  return (
    <div className='works'>
      <div className="work_section">

        <div className="cards">
          <img src={work1}alt="" />
          <button>see work</button>
        </div>

        <div className="cards">
          <img  src={work2} alt="" />
          <button>see work</button>
        </div>

        <div className="cards">
          <img src={work3} alt="" />
          <button>see work</button>
        </div>

        <div className="cards">
          <img src={work4}alt="" />
          <button>see work</button>
        </div>

        <div className="cards">
          <img  src={work5} alt="" />
          <button>see work</button>
        </div>

        <div className="cards">
          <img  src={work6} alt="" />
          <button>see work</button>
        </div>

      </div>

    </div>
  )
}

export default Works