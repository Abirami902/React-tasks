import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const Big = (Big) => {
  return (

    <div class={`card ${Big.height} ${Big.heights}  ${Big.heightss} ${Big.width}  ${Big.color} `} style={{width:'30%'}}>
      <img src= {Big.img} className="card-img-top " alt=""/>
      <div class="card-body ">
        <p><i class=''></i>{Big.iconpic}</p>
        <h5 className={`card-title fw-bold text-danger ${Big.text}`}><i className={`${Big.vedio}`}></i>{Big.heading}</h5>
        {Big.pic}
        <p className="card-text fw-bold fs-4">{Big.body}</p>
        <img src={Big.rimg} height='60px' width='60px' className={`rounded-circle  ${Big.grid} ${Big.circleImgs}`} alt=""/>
        <span className={`card-text mb-3 fs-6 text-secondary ${Big.text}`}>{Big.description}</span>
        <div className='d-flex gap-3 '>

      <img src={Big.simg} height='50px' width='50px' className={`rounded-circle  ${Big.circleImg}`} alt=""/>
        <div>

        <span className="card-text  fs-6 text-secondary">{Big.des}</span><br />
        <span className="card-text  fw-bold fs-6 text-dark ">{Big.desc}</span>
        </div>
        </div>

<div className='a'>
        <p><i class={Big.icon}>{Big.iconvalue1}</i></p>
       {Big.iconpos}
        <p><i class={Big.icons}>{Big.iconvalue2}</i></p>
        <p><i class={Big.iconss}>{Big.iconvalue3}</i></p>
</div>

      </div>
      <div className="card-footer">
        <small className="text-body-secondary"></small>
      </div>
    </div>
  
  )
}

export default Big
