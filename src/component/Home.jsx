import React, {Component} from 'react';
import Axios from 'axios';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
import {FaStar} from 'react-icons/fa';
import {connect} from 'react-redux';
import {TambahAction, KurangAction} from './../redux/actions';

class Home extends Component {
    state = {
        categories:[],
        restaurants:[]
      }

    //componentDidMount terjadi setelah render pertama
    componentDidMount() {
        Axios.get('https://developers.zomato.com/api/v2.1/categories', {
            headers:{
                'user-key':'d200b9e38cd90a755a4b1a85cddc719f'
            }
        }).then((res)=>{
            console.log(res.data.categories)
            Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating',
            {
                headers:{
                    'user-key':'d200b9e38cd90a755a4b1a85cddc719f'
                }
            }).then((res1)=>{
                console.log(res1.data.restaurants)
                this.setState({categories:res.data.categories, restaurants:res1.data.restaurants})
            }).catch((err)=>{
                console.log(err)
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderCategories=()=>{
        if(this.state.categories.length===0){
            return (
                <option>
                    Loading ...
                </option>
            )
        }
        return this.state.categories.map((val,index)=>{
            return(
                <option key={index} value={val.categories.id}>{val.categories.name}</option>
            )
        })
    }
    
    renderCards=()=>{
        return this.state.restaurants.map((val,index)=>{
            return(
            <div key={index} className='col-md-4 px-3 py-2'>
                <Card>
                    <CardImg top width="100%" height={'200'} src={val.restaurant.featured_image} alt="Card image cap" />
                    <CardBody>
                    <CardTitle>{val.restaurant.name}</CardTitle>
                    <CardSubtitle><FaStar style={{color:'yellow'}}/> &nbsp; {val.restaurant.user_rating.aggregate_rating}</CardSubtitle>
                    <CardText></CardText>
                    <a href={val.restaurant.menu_url} target='blank'>
                        <Button>More Info</Button>
                    </a>
                    </CardBody>
                </Card>
            </div>
            )
        })
    }

    render() { 
        return (
            <div>
                <div>
                    <select>
                        {this.renderCategories()}
                    </select>
                </div>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-danger' onClick={this.props.KurangAction}>-</button>
                    &nbsp;&nbsp;
                    {this.props.Angka}
                    &nbsp;&nbsp;
                    <button className='btn btn-primary' onClick={this.props.TambahAction}>+</button>
                </div>
                <div className="row px-5">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}

const MapStateToprops=(state)=>{
    return{
      Angka:state.Count.angka
    }
  }
 
export default connect(MapStateToprops,{TambahAction,KurangAction})(Home);