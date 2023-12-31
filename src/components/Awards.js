import './awards.css'

const Awards = () => {


    return(
        <div class="fun-facts">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="wrapper">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="counter">
                      <h2 class="timer count-title count-number" data-to="34" data-speed="1000"></h2>
                       <p class="count-text ">Buildings<br />Finished Now</p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="counter">
                      <h2 class="timer count-title count-number" data-to="12" data-speed="1000"></h2>
                      <p class="count-text ">Years<br />Experience</p>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="counter">
                      <h2 class="timer count-title count-number" data-to="24" data-speed="1000"></h2>
                      <p class="count-text ">Awwards<br />Won 2023</p>
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

export default Awards;