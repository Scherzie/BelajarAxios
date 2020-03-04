import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ParkirMobil, ParkirMotor, Reset} from '../redux/actions/ParkirAction'

class Parkir extends Component {
    state = {
        isMobil:true,
        lamamobil:'',
        lamamotor:'',
        styleclass:'d-flex justify-content-center pt-3',
        Reset:false
      }
    onLamaChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onMobilClick=()=>{
        this.setState({isMobil:true, lamamotor:''})
        this.props.Reset()
    }
    onMotorClick=()=>{
        this.setState({isMobil:false, lamamobil:'', Reset:false})
        this.props.Reset()
    }
    onBayarMobilClick=()=>{
        var lamamobil=this.state.lamamobil
        this.props.ParkirMobil({lama:lamamobil,harga:2000})
    }
    onBayarMotorClick=()=>{
        var lamamotor=this.state.lamamotor
        this.props.ParkirMotor({lama:lamamotor,harga:1000})
    }
    render() {
        const {isMobil,styleclass,lamamobil,lamamotor}=this.state
        if(isMobil){
            return (
                <div>
                    <center>
                        <h2>Ini Parkir Mobil</h2>
                    </center>
                    <div className={styleclass}>
                        <button className={`btn ${isMobil?'btn-primary':'btn-outline-primary'} mr-5`} onClick={this.onMobilClick}>Mobil</button>
                        <button className='btn btn-outline-danger' onClick={this.onMotorClick}>Motor</button>
                    </div>
                    <div className={styleclass}>
                        <div>
                            <input className='form-control' onChange={this.onLamaChange} value={lamamobil} name='lamamobil' placeholder='berapa jam?' type='number'/>
                        </div>
                    </div>
                    <div className={styleclass}>
                        <h3>2000/Jam</h3>
                    </div>
                    <div className={styleclass}>
                        <button className='btn btn-success' onClick={this.onBayarMobilClick}>Bayar</button>
                        {
                            this.state.Reset?
                            <button className='btn btn-primary'>Reset</button>
                            :
                            null
                        }
                    </div>
                </div>
            )
        } 
        return (
            <div>
                <center>
                    <h2>Ini Parkir Motor</h2>
                </center>
                <div className={styleclass}>
                    <button className='btn btn-outline-primary mr-5' onClick={this.onMobilClick}>Mobil</button>
                    <button className={`btn ${isMobil?'btn-outline-danger':'btn-danger'}`} onClick={this.onMotorClick}>Motor</button>
                </div>
                <div className={styleclass}>
                    <div>
                        <input className='form-control' onChange={this.onLamaChange} value={lamamotor} name='lamamotor' placeholder='berapa jam?' type='number'/>
                    </div>
                </div>
                <div className={styleclass}>
                    <h3>1000/Jam</h3>
                </div>
                <div className={styleclass}>
                    <button className='btn btn-success' onClick={this.onBayarMotorClick}>Bayar</button>
                    {
                        this.state.Reset?
                        <button className='btn btn-primary'>Reset</button>
                        :
                        null
                    }
                </div>
            </div>
          );
    }
}
 
export default connect(null,{ParkirMobil, ParkirMotor, Reset})(Parkir);