import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class Home extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <div className="main-card card border-left-primary shadow h-100">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col">
                                    <div className="hello-msg">
                                        Hi, i`m
                                        <strong className="h3 font-weight-bold text-primary text-uppercase border-bottom">
                                        Harishkumar Chowkicherla</strong>
                                        <strong className="mb-1 font-weight-bold text-gray-800">Sr Technical Lead</strong>
                                        <div className="mb-0 font-weight-bold text-gray-800">My Name is Harishkumar and i am a full satck developper. I am femeliar with LAMP, MEAN, MERN stacks.
                                        My Name is Harishkumar and i am a full satck developper. I am femeliar with LAMP, MEAN, MERN stacks.
                                        My Name is Harishkumar and i am a full satck developper. I am femeliar with LAMP, MEAN, MERN stacks.
                                        My Name is Harishkumar and i am a full satck developper. I am femeliar with LAMP, MEAN, MERN stacks.</div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row no-gutters align-items-center">
                                <div className="col-xl-6">
                                    <div className="h5 mb-0 text-gray-800">
                                        <table className="table text-align-left">
                                            <tbody>
                                                <tr className="border-bottom my-2">
                                                    <th>Phone</th>
                                                    <td>: +91-7801070710, +91-7997156656</td>
                                                </tr>
                                                <tr className="border-bottom my-2">
                                                    <th>Email</th>
                                                    <td>: harishkumarreddy.cherla@gmail.com</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="text-m align-items-left font-weight-bold text-primary text-uppercase mb-1">
                                        <a className="btn btn-primary btn-circle m-1" href="#">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a className="btn btn-primary btn-circle m-1 btn-outline" href="#">
                                            <i className="fab fa-linkedin"></i>
                                        </a>
                                        <a className="btn btn-primary btn-circle m-1 btn-outline" href="#">
                                            <i className="fab fa-github"></i>
                                        </a>
                                        <a className="btn btn-primary btn-circle m-1 btn-outline" href="#">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                        <a className="btn btn-primary " href="#">
                                            <i className="fas fa-download"></i> Resume
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6 shadow border banner-img" style={{
                                    backgroundImage: "url(./logo512.png)"
                                }}>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home