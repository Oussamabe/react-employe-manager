import React, { Component } from "react";

export default class footer extends Component {

  constructor(props) {
    super(props);
    var today = new Date(),

    date = today.getFullYear();

   

    this.state = {

      currentDate: date

    }
    
  }
  render() {
    return (
      <div>
        <div class="footer py-1">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12 text-center">
                <p>Copyright c  { this.state.currentDate } Axentis. All right reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
