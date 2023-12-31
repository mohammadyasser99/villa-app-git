import React from 'react';
import './bestDeal.css'
import { useNavigate } from 'react-router-dom';
const BestDeal = () => {

    function handleTabClick(e) {


if(e.target.id == "appartment-tab") {
document.getElementById("appartment").classList.add("active" ,"show")
document.getElementById("villa").classList.remove("active" ,"show")
document.getElementById("penthouse").classList.remove("active" ,"show")
document.getElementById('appartment-tab').classList.add("active")
document.getElementById('villa-tab').classList.remove("active")
document.getElementById('penthouse-tab').classList.remove("active")




    }else if(e.target.id == "villa-tab") {
document.getElementById("appartment").classList.remove("active" ,"show")
document.getElementById('appartment-tab').classList.remove("active")
document.getElementById('villa-tab').classList.add("active")
document.getElementById("villa").classList.add("active", "show")



    }else if(e.target.id == "penthouse-tab") {
document.getElementById("appartment").classList.remove("active" ,"show")
document.getElementById("villa").classList.remove("active" ,"show")
document.getElementById("penthouse").classList.add("active" ,"show")
document.getElementById('appartment-tab').classList.remove("active")
document.getElementById('villa-tab').classList.remove("active")
document.getElementById('penthouse-tab').classList.add("active")
    }
}

const navigate = useNavigate();
  function navigatesch(){
    navigate('/reserve');
  }


    return(
        <div class="section best-deal">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="section-heading">
                <h6>| Best Deal</h6>
                <h2>Find Your Best Deal Right Now!</h2>
              </div>
            </div>
          
            <div class="col-lg-12">
              <div class="tabs-content">
                <div class="row">
                  <div class="nav-wrapper ">
                    <ul class="nav nav-tabs" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active"  id="appartment-tab" onClick={handleTabClick} data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true">Appartment</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="villa-tab" onClick={handleTabClick} data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false">Villa House</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="penthouse-tab" data-bs-toggle="tab"
                         data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false"
                         onClick={handleTabClick}
                         >Penthouse</button>
                      </li>
                    </ul>
                  </div>              
                  <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade show active" id="appartment" role="tabpanel" aria-labelledby="appartment-tab">
                      <div class="row">
                        <div class="col-lg-3">
                          <div class="info-table">
                            <ul>
                              <li>Total Flat Space <span>185 m2</span></li>
                              <li>Floor number <span>26th</span></li>
                              <li>Number of rooms <span>4</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <img src="assets/images/deal-01.jpg" alt="" />
                        </div>
                        <div class="col-lg-3">
                          <h4>Extra Info About Property</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut 
                            labore et dolore magna aliqua quised ipsum suspendisse. 
                          <br /><br />When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                          <div class="icon-button">
                            <a onClick={navigatesch}><i class="fa fa-calendar"></i>  Schedule aaaa visit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="villa" role="tabpanel" aria-labelledby="villa-tab">
                      <div class="row">
                        <div class="col-lg-3">
                          <div class="info-table">
                            <ul>
                              <li>Total Flat Space <span>250 m2</span></li>
                              <li>Floor number <span>26th</span></li>
                              <li>Number of rooms <span>5</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <img src="assets/images/deal-02.jpg" alt="" />
                        </div>
                        <div class="col-lg-3">
                          <h4>Detail Info About Villa</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor
                             pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. <br /><br />Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
                          <div class="icon-button">
                            <a onClick={navigatesch}><i class="fa fa-calendar"></i> Schedule a visit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="penthouse" role="tabpanel" aria-labelledby="penthouse-tab">
                      <div class="row">
                        <div class="col-lg-3">
                          <div class="info-table">
                            <ul>
                              <li>Total Flat Space <span>320 m2</span></li>
                              <li>Floor number <span>34th</span></li>
                              <li>Number of rooms <span>6</span></li>
                              <li>Parking Available <span>Yes</span></li>
                              <li>Payment Process <span>Bank</span></li>
                            </ul>
                          </div>
                        </div>
                        <div class="col-lg-6">
                          <img src="assets/images/deal-03.jpg" alt="" />
                        </div>
                        <div class="col-lg-3">
                          <h4>Extra Info About Penthouse</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt
                             ut labore et dolore magna aliqua quised ipsum suspendisse. <br/><br/>Swag fanny pack lyft blog twee. JOMO ethical copper mug, 
                             succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger
                              poutine next level humblebrag swag franzen.</p>
                          <div class="icon-button">
                            <a onClick={navigatesch}><i class="fa fa-calendar"></i> Schedule aaa visit </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    
    )

}

export default BestDeal