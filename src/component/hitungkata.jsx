import React from 'react';
import {connect} from 'react-redux';
import {HitungKataAction} from './../redux/actions';

const HitungKata=props=>{

  const onKataChange=(e)=>{
    var kata=e.target.value.split(' ')
    var newkata=kata.filter((val)=>val !=='')
    props.HitungKataAction(newkata.length)
  }

  return(
      <div>
          <textarea onChange={onKataChange} className='form-control' cols="30" rows="10"/>
          <div>
            <h1>{props.Bebas}</h1>
          </div>
      </div>
  )
}

export default connect(
  (state)=>{
    return{
      Bebas:state.Kata
    }
  }, {HitungKataAction}) (HitungKata);