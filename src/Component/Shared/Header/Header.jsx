import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => {
    return (
        <div className='wrapper'>
            <Nav></Nav>
            <aside class="main-sidebar sidebar-dark-primary elevation-4 fixed">
                {/* Brand Logo  */}
                <Link to="/" class="brand-link">
                    <img src="assets/images/logo/logo.png" alt="DSMS Logo" class="brand-image" />
                </Link>


                {/* Sidebar  */}
                <div class="sidebar">
                    {/* Sidebar user */}
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="image">
                            <img src="assets/images/users/user-1.jpg" class="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div class="info">
                            <a href="javascript::void(0)" class="d-block" data-toggle="modal"
                                data-target="#profile">Profile</a>
                        </div>
                    </div>


                    {/*  Sidebar Menu  */}
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                            data-accordion="false">
                            {/* <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library --> */}
                            <li class="nav-item">
                                <Link to="/dashbord" class="nav-link ">
                                    <i class="nav-icon fas fa-tachometer-alt"></i>
                                    <p>Dashboard</p>
                                </Link>

                            </li>
                            <li class="nav-item">
                                <Link to="/sms" class="nav-link">
                                    <i class="nav-icon fa-solid fa-envelope"></i>
                                    <p>Send SMS</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/phone-book" class="nav-link">
                                    <i class="nav-icon fa-solid fa-address-book"></i>
                                    <p>Phone Book</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="group" class="nav-link">
                                    <i class="nav-icon fa-solid fa-user-group"></i>
                                    <p>Group</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="report" class="nav-link">
                                    <i class="nav-icon fa-solid fa-chart-line"></i>
                                    <p>Report</p>
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link to="package" class="nav-link">
                                    <i class="nav-icon fa-solid fa-file-invoice-dollar"></i>
                                    <p>Package</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="documents" class="nav-link" data-toggle="modal" data-target="#documents">
                                    <i class="nav-icon fa-solid fa-file"></i>
                                    <p>Documents</p>
                                </Link>
                            </li>

                            <li class="nav-item">
                                <Link to="terms-cons" class="nav-link">
                                    <i class="nav-icon fa-solid fa-handshake"></i>
                                    <p>Terms & Condition</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="privacy" class="nav-link">
                                    <i class="nav-icon fa-solid fa-key"></i>
                                    <p>Privacy Policy</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="about"><a href="about.html" class="nav-link">
                                    <i class="nav-icon fa-solid fa-circle-question"></i>
                                    <p>About US</p>
                                </a></Link>

                            </li>
                            <li class="nav-item">
                                <Link to="notice" class="nav-link">
                                    <i class="nav-icon fa-solid fa-circle-exclamation"></i>
                                    <p>Notice</p>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="signin" class="nav-link">
                                    <i class="nav-icon fa-solid fa-turn-up"></i>
                                    <p>Log Out</p>
                                </Link>
                            </li>

                        </ul>
                    </nav>
                    {/* sidebar-menu*/}
                </div>
                {/* sidebar  */}
            </aside>
            <div class="content-wrapper">






            </div>
        </div >
    );
};

export default Header;
<h1>head</h1>