import './propertiesSection.css'
import { useQuery } from '@tanstack/react-query'
import { fetchproperties } from '../util/http'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PropertiesSection = () => {
  const {data ,isLoading} = useQuery({
    queryKey:['properties'],
    queryFn:fetchproperties,
    staleTime:5000
  });

  const [filter, setFilter] = useState(data);
  const [active, setActive] = useState({
    showall:true,
    Apartment:false,
    'Luxury Villa':false,
    Penthouse:false
  });





const content = filter?.map((item) => (
  <div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
    <div class="item">
      <a href="javascript:void(0)"><img src={`data:image/jpeg;base64,${item.image}`} alt="" /></a>
      <span class="category">{item.type}</span>
      <h6>${item.price}</h6>
      <h4><a href="javascript:void(0)">{item.address}</a></h4>
      <ul>
        <li>Bedrooms: <span>{item.bedrooms}</span></li>
        <li>Bathrooms: <span>{item.bathrooms}</span></li>
        <li>Area: <span>{item.area}m2</span></li>
        <li>Floor: <span>{item.floor}</span></li>
        <li>Parking: <span>{item.parking}</span></li>
      </ul>
      <div class="main-button" onClick={navigatesch}>
        <a href='javascript:void(0)' >Schedule a visit</a>
      </div>
    </div>
  </div>
));

function handlefilter(e){
  e.preventDefault();
  const filter = e.target.id;
  console.log(filter);
  if(filter === 'showall'){
    setFilter(data);
  }
  else{
    setFilter(data?.filter(item => item.type === filter));

    

   


  }
}

const navigate = useNavigate();

function navigatesch(){
  navigate('/reserve');
}


  
  

    return (

      <div class="section properties">
      <div class="container">
        <ul class="properties-filter">
          <li>
            <a className='is_active' id='showall' data-filter="*" onClick={handlefilter} >Show All</a>
          </li>
          <li>
            <a  id='Apartment' data-filter=".adv" onClick={handlefilter}>Apartment</a>
          </li>
          <li>
            <a id='Luxury Villa'  data-filter=".str" onClick={handlefilter}>Villa House</a>
          </li>
          <li>
            <a id='Penthouse' data-filter=".rac" onClick={handlefilter}>Penthouse</a>
          </li>
        </ul>
        <div class="row properties-box">


        {content}
          
 
        </div>
        {/* <div class="row">
          <div class="col-lg-12">
            <ul class="pagination">
              <li><a href="#">1</a></li>
              <li><a class="is_active" href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  
    )

}

export default PropertiesSection