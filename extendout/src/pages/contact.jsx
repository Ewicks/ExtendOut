import React from 'react'

const Contact = () => {
  return (
    <div>
      <div class="row my-5 contact-page">
        <div class="col-8 text-light form-section my-5 d-flex flex-column justify-content-start align-items-center border-right xp">
        <h1>Get in touch with our team of experts</h1>
        <p class="my-5">atkajs aojs oiajsdoiasjdoaisjdoasi djoaisdj 
            aosijdaoisjdoaisdjapoisdjaoisdjaoisdjoaisdjasd
            aslkdjaoisdjoaisdjoaisdjoaisdjoi
        </p>
         <form  class="row g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Email</label>
              <input type="email" class="form-control" id="inputEmail4" required />
            </div>
            <div class="col-md-6">
              <label for="number" class="form-label">Phone Number</label>
              <input type="number" class="form-control" id="number" required />
            </div>
            <div class="col-12">
              <label for="description" class="form-label">Description</label>
              <textarea type="text" class="form-control" id="description" placeholder="description" required></textarea>
            </div>
           
            <div class="col-12">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck" />
                <label class="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Send</button>
            </div>
        </form>
      </div>

        <div class="col-4 text-light my-5 d-flex flex-column align-items-center justify-content-between text-center xp">
            <h1>Schedule a call today</h1>
            <button class="btn home-btn">Book a call</button>
            <img clas="img-fluid" src="https://scrapingpros.com/wp-content/uploads/2023/02/PProducto_what_ilus-291x300.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact