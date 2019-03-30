import React, { Component } from 'react';
import './App.css';
import {InfoField} from "./components/infoField/InforField";

const me = {
    commonInfo: {
        dob: '14 - Nov - 1993',
        email: 'nogias9x@gmail.com',
        idCard: '079.193.004.392',
        phone: '0378.678.349',
        place: '458/17 Huynh Tan Phat Street, District 7, HCMC',
        facebook: 'xxxxxxxxxxxxxxxxxxxxxxxx',
        github: 'xxxxxxxxxxxxxxxxxxxxxxxx',
    },
    avatar: `${process.env.PUBLIC_URL}/images/avatar.png`
}

class App extends Component {
  render() {
    return (
          <div className="container main">
              <div className="row section-light">
                  <div className="col-3">
                      <div className="avatar-container">
                          <img src={me.avatar}/>
                      </div>
                  </div>
                  <div className="col-9">
                      <h1 className="name">TU NGUYEN</h1>
                      <h1 className="title">BACKEND DEVELOPER</h1>

                      <div className="row">
                          {
                              Object.keys(me.commonInfo).map(key => {
                                  return (
                                      <InfoField
                                          type={key}
                                          value={me.commonInfo[key]}
                                      />
                                  )
                              })
                          }
                      </div>
                  </div>
              </div>


              <div className="row section-dark">
                  <div className="col-12">
                      <div className="row">
                          <div className="col-4">
                              <div className="section-tag"><h3>MY TARGETS</h3></div>
                          </div>
                          <div className="col-8">
                              Within next 2 years, I want to:
                              <ul>
                                  <li>Become a senior Website and Android developer</li>
                                  <li>Use English fluently (100+ TOEFL)</li>
                                  <li>Be able to lead a team of 4+ developers</li>
                              </ul>
                          </div>
                      </div>

                      <hr/>

                      <div className="row">
                          <div className="col-12">
                              <div className="section-tag"><h3>MY SKILLS</h3></div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-2">Skill name</div>
                          <div className="col-4">
                              <button className="point point-on"></button>
                              <button className="point point-on"></button>
                              <button className="point point-on"></button>
                              <button className="point point-on"></button>
                              <button className="point point-on"></button>
                              <button className="point point-on"></button>
                              <button className="point point-on"></button>
                              <button className="point"></button>
                              <button className="point"></button>
                              <button className="point"></button>
                          </div>
                          <div className="col-6">description about the skill</div>
                      </div>
                      <div className="row">
                          <div className="col-2">Skill name</div>
                          <div className="col-4">points</div>
                          <div className="col-6">description about the skill</div>
                      </div>

                  </div>
              </div>


              <div className="row section-light">
                  <div className="col-12">
                      <div className="row">
                          <div className="col-6">
                              <div className="section-tag"><h3>MY STRENGTHS</h3></div>
                              <ul>
                                  <li>High sense of responsibility</li>
                                  <li>Hard-working</li>
                                  <li>Good communication and team-working</li>
                              </ul>
                          </div>
                          <div className="col-6">
                              <ul>
                                  <li>Following processes and coding-conventions consciously</li>
                                  <li>Ability to work in a high pressure environment</li>
                                  <li>Reading documents in English fairly</li>
                              </ul>
                          </div>
                      </div>
                      <hr/>
                      <div className="row">
                          <div className="col-6">
                              <div className="section-tag"><h3>MY HOBBIES</h3></div>
                              <ul>
                                  <li>Reading books of literature, sciences and psychology</li>
                              </ul>
                          </div>
                          <div className="col-6">
                              <ul>
                                  <li>Fishing</li>
                                  <li>Making some handmade things</li>
                                  <li>Fixing things</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>


              <div className="row">
                  <div className="col-1">
                      One of 1 columns
                  </div>
              </div>
          </div>
    );
  }
}

export default App;
