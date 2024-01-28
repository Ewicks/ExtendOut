import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="extra-padding">
        <div className="row my-5">
          <div className="col">
            <h1>Contact Us</h1>
            <p>Contact us and we will get back to you as soon as we can</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
          <form action="mailto:ethanowicks9@example.com" className='form-contact'>
            <div class="form-group my-2">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div class="form-group my-2">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div class="form-group my-2">
              <label for="exampleInputPassword1">Description</label>
              <textarea type="password" class="form-control" id="exampleInputPassword1" placeholder="enter details here..." />
            </div>
            <button type="submit" value="Send" class="btn btn-form mb-5">Send</button>
          </form>

          </div>
        </div>
       
      </div>
    </div>
   
  )
}

export default Contact