import "bootstrap/dist/css/bootstrap.min.css";
// import logo11 from "./img/logo.svg";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Carousel,
} from "react-bootstrap";
import { HiOutlineEnvelope } from "react-icons/hi2";
import {
  FaCertificate,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaStar,
  FaStarHalfAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUserTie,
  FaUserFriends,
} from "react-icons/fa";
import logo_1 from "./img/logo.png";
import "./App.css";
function App() {
  return (
    <>
      <div className="con_1">
        <div className="container d-flex justify-content-around align-items-baseline">
          <div className="cer_1">
            <div className="vc_2 d-flex align-items-baseline vv">
              <p>
                {" "}
                <HiOutlineEnvelope />
              </p>
              <p> </p>
            </div>

            <div className="vc_1 d-flex  align-items-baseline vv">
              <p>
                {""}
                <FaCertificate />
              </p>
              <p> Verify Certificate</p>
            </div>
          </div>

          <div className="con_4">
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>

          <div className="i_icons ">
            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaGooglePlusG />
            </i>
            <i>
              <FaLinkedin />
            </i>
            <i>
              <FaYoutube />
            </i>
            <i>
              <FaWhatsapp />
            </i>
          </div>
        </div>
      </div>

      <div className="container ">
        <Navbar expand="lg">
          <Container className="lg_11">
            <Navbar.Brand href="#home">
              <div className="logo_img">
                <img src={logo_1}></img>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">HOME</Nav.Link>
                <NavDropdown title="COURSES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">COLLEGE COURSES</Nav.Link>
                <NavDropdown title="ACTIVITIES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Gallery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">BLOG</Nav.Link>
                <NavDropdown title="KNOW US" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">About</NavDropdown.Item>
                  <NavDropdown.Item href="#">Success Stories</NavDropdown.Item>
                  <NavDropdown.Item href="#">
                    Recruitment Partners
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">GET IN TOUCH</Nav.Link>
                <NavDropdown title="STUDENTS ZONE" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">STUDENTS LOGIN</NavDropdown.Item>
                  <NavDropdown.Item href="#">SHOWCASE</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      



      <Carousel>
      <Carousel.Item>
          <div className="sil_nv">
                <img src={require("./img/asset 5.jpeg")}></img>
          </div>
      </Carousel.Item>
      <Carousel.Item>
              <div className="sil_nv">
              <img src={require("./img/asset 6.jpeg")}></img>
              </div>
      </Carousel.Item>
      <Carousel.Item>
          <div className="sil_nv">
                <img src={require("./img/asset 5.jpeg")}></img>
          </div>
      </Carousel.Item>
      <Carousel.Item>
          <div className="sil_nv">
                <img src={require("./img/asset 5.jpeg")}></img>
          </div>
      </Carousel.Item>
    </Carousel>
















      <div className="container p-4">
        <div className="img_gellry_con ">
          <p>CREATIVE COURE</p>
          <h5>OFFERED COURSES</h5>
        </div>

        <div className="row d-flex justify-content-around ">
          <div className="col-lg-4 col-md-6 col-sm-6 video_1 mt-2">
            <div className="img_video">
                        <video autoPlay muted loop >
                                <source src={require('./img/1.mp4')} type="video/mp4"></source>
                        </video>
            </div>
            <div className="dc border-bottom mt-2">
              <h5>Development Courses</h5>
            </div>
            <div className="mt-3  d-flex justify-content-around">
              <div className="star">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <p className="btn_12">
                {" "}
                <Button variant="dark">Know More...!</Button>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 video_1 mt-2">
            <div className="img_video">
            <video autoPlay muted loop >
                                <source src={require('./img/2.mp4')} type="video/mp4"></source>
                        </video>
            </div>
            <div className="dc border-bottom mt-2">
              <h5>Development Courses</h5>
            </div>
            <div className="mt-3 d-flex justify-content-around">
              <div className="star">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <p className="btn_12">
               <Button variant="dark">Know More...!</Button>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 video_1 mt-2">
            <div className="img_video">
            <video autoPlay muted loop >
                                <source src={require('./img/3.mp4')} type="video/mp4"></source>
                        </video>
            </div>
            <div className="dc border-bottom mt-2">
              <h5>Development Courses</h5>
            </div>
            <div className="mt-3 d-flex justify-content-around">
              <div className="star">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <p className="btn_12">
                {" "}
                <Button variant="dark">Know More...!</Button>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 video_1 mt-2">
            <div className="img_video">
              <img src={require("./img/asset 5.jpeg")}></img>
            </div>
            <div className="dc border-bottom mt-2">
              <h5>Development Courses</h5>
            </div>
            <div className="mt-3 d-flex justify-content-around">
              <div className="star">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <p className="btn_12">
                {" "}
                <Button variant="dark">Know More...!</Button>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 video_1 mt-2">
            <div className="img_video">
              <img src={require("./img/asset 6.jpeg")}></img>
            </div>
            <div className="dc border-bottom mt-2">
              <h5>Development Courses</h5>
            </div>
            <div className="mt-3 d-flex justify-content-around">
              <div className="star">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <p className="btn_12">
                {" "}
                <Button variant="dark">Know More...!</Button>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 video_1 mt-2">
            <div className="img_video">
              <img src={require("./img/img5.jpg")}></img>
            </div>
            <div className="dc border-bottom mt-2">
              <h5>Development Courses</h5>
            </div>
            <div className="mt-3 d-flex justify-content-around">
              <div className="star">
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStar />
                </i>
                <i>
                  <FaStarHalfAlt />
                </i>
              </div>
              <p className="btn_12">
                {" "}
                <Button variant="dark">Know More...!</Button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
                <div className="col video_con1">
                          <div className="p-5">
                            <p>ABOUT US</p>
                            <h5>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h5>
                            <p>
                              Creative Design & Multimedia Institute(CDMI) is a reputed training
                              institute in Surat for web design, Game design,Mobile App
                              Development, Game Development ,Video Editing & All types of IT
                              Courses with 8 years of full-fledged, result-oriented training
                              experience. We stepped in the market in 2014 with the goal to help
                              students, working professionals and other interested candidates
                              get that dream job or open that desired freelance business in some
                              of the most popular Computer / IT fields. Our aim is to ease the
                              hiring process for businesses and organizations by providing
                              work-ready professionals who can contribute greatly to their
                              success. Since then, we have worked hard to achieve this goal and
                              dedicated our time and resources to train students extensively.
                            </p>
                          </div>
                
                </div>

                <div className="col mt-4" >
                <video autoPlay muted loop>
                                 <source src={require('./img/1.mp4')} type="video/mp4"></source>
                     </video>
                </div>


      </div>

      <div className="back_img">
        <div className="bg_back ">
          <div class="row p-4">
            <div className="col-lg-3 col-md-6 col-sm-6 col-6  bg_icons">
              <i>
                <FaUserTie />{" "}
              </i>
              <p>8000+</p>
              <p>HAPPY STUDENTS</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6 bg_icons">
              <i>
                <FaCertificate />
              </i>
              <p>10+</p>
              <p>CERTIFICATION APPROVAL</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6  bg_icons">
              <i>
                <FaChalkboardTeacher />
              </i>
              <p>60+</p>
              <p>CERTIFIED TEACHERS</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-6  bg_icons">
              <i>
                <FaUserGraduate />
              </i>
              <p>4000+</p>
              <p>STUDENTS PLACED</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-100">
        <div className="row ">
          <div className="col-lg-6 col-sm-6">
            <Carousel>
              <Carousel.Item>
                <div>
                  <p>
                    Creative Design & Multimedia Institute is a reputed
                    training institute in Surat for web design, Game
                    design,Mobile App Development, Game Development ,Video
                    Editing & All types of IT
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <div className="card_imgs">
                      <img src={require("./img/asset 14.jpeg")}></img>
                    </div>
                    <div className="student">
                      <p>Pooja Vaishnav</p>
                      <p>web devlopmets</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="cont_11">
                  <p>
                    Creative Design & Multimedia Institute is a reputed
                    training institute in Surat for web design, Game
                    design,Mobile App Development, Game Development ,Video
                    Editing & All types of IT
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <div className="card_imgs">
                      <img src={require("./img/asset 14.jpeg")}></img>
                    </div>
                    <div className="student">
                      <p>Pooja Vaishnav</p>
                      <p>web devlopmets</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="cont_11">
                  <p>
                    Creative Design & Multimedia Institute is a reputed
                    training institute in Surat for web design, Game
                    design,Mobile App Development, Game Development ,Video
                    Editing & All types of IT
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <div className="card_imgs">
                      <img src={require("./img/asset 14.jpeg")}></img>
                    </div>
                    <div className="student">
                      <p>Pooja Vaishnav</p>
                      <p>web devlopmets</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="cont_11">
                  <p>
                    Creative Design & Multimedia Institute is a reputed
                    training institute in Surat for web design, Game
                    design,Mobile App Development, Game Development ,Video
                    Editing & All types of IT
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <div className="card_imgs">
                      <img src={require("./img/asset 14.jpeg")}></img>
                    </div>
                    <div className="student">
                      <p>Pooja Vaishnav</p>
                      <p>web devlopmets</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-lg-6  col-sm-6 mt-4 main_img_silders ">
                  <div className="po_8">
                          <img src={require('./img/asset 36.jpeg')}></img>   
                  </div>
                             
          </div>

        </div>
      </div>


          <div className="container p-100">
                          <div>
                                <p>READ OUR DIFFERENCE</p>
                                <h4>WHY CHOOSE CREATIVE</h4>
                          </div>
                    <div className="row  p_ho">
                              <div className="m-4 col-lg-4 col-md-6 hover_12 ">
                                           <div className="d-flex justify-content-center mt-3">
                                                <div className="ic_img">
                                                          <div className="borders_1 m-2 p-2">
                                                              <i><FaUserFriends/></i>
                                                          </div>
                                                  </div>
                                           </div>
                                        <div className="mt-5">
                                              <h5>Industry Experts As Trainers</h5>
                                              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>
                                        </div>
                              </div>

                              <div className="m-4 col-lg-4 col-md-6 hover_12">
                                           <div className="d-flex justify-content-center mt-3">
                                                <div className="ic_img">
                                                          <div className="borders_1 m-2 p-2">
                                                              <i><FaUserFriends/></i>
                                                          </div>
                                                  </div>
                                           </div>
                                        <div className="mt-5">
                                              <h5>Industry Experts As Trainers</h5>
                                              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>
                                        </div>
                              </div>

                              <div className="m-4 col-lg-4 col-md-6 hover_12">
                                           <div className="d-flex justify-content-center mt-3">
                                                <div className="ic_img">
                                                          <div className="borders_1 m-2 p-2">
                                                              <i><FaUserFriends/></i>
                                                          </div>
                                                  </div>
                                           </div>
                                        <div className="mt-5">
                                              <h5>Industry Experts As Trainers</h5>
                                              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>
                                        </div>
                              </div>

                              <div className="m-4 col-lg-4 col-md-6 hover_12">
                                           <div className="d-flex justify-content-center mt-3">
                                                <div className="ic_img">
                                                          <div className="borders_1 m-2 p-2">
                                                              <i><FaUserFriends/></i>
                                                          </div>
                                                  </div>
                                           </div>
                                        <div className="mt-5">
                                              <h5>Industry Experts As Trainers</h5>
                                              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>
                                        </div>
                              </div>


                              <div className="m-4 col-lg-4 col-md-6 hover_12">
                                           <div className="d-flex justify-content-center mt-3">
                                                <div className="ic_img">
                                                          <div className="borders_1 m-2 p-2">
                                                              <i><FaUserFriends/></i>
                                                          </div>
                                                  </div>
                                           </div>
                                        <div className="mt-5">
                                              <h5>Industry Experts As Trainers</h5>
                                              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>
                                        </div>
                              </div>


                              <div className="m-4 col-lg-4 col-md-6 hover_12">
                                           <div className="d-flex justify-content-center mt-3">
                                                <div className="ic_img">
                                                          <div className="borders_1 m-2 p-2">
                                                              <i><FaUserFriends/></i>
                                                          </div>
                                                  </div>
                                           </div>
                                        <div className="mt-5">
                                              <h5>Industry Experts As Trainers</h5>
                                              <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis</p>
                                        </div>
                              </div>
                      
                      </div>  



          </div>


    x




    </>
  );
}

export default App;
