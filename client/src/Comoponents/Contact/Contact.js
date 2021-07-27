import React, { useState, useEffect } from "react";
import "./Contact.css";
// import { sendMessage } from "../../api/index.js";
import { useForm } from '@formspree/react';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';


function Contact() {

  const defaultProps = {
    center: {
      lat: 43.47247224269967,
      lng: -80.54473958598399
    },
    zoom: 13
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company_name: "",
    university: ""
  });

  const [clientState, handleClient] = useForm("mvovelar");
  const [studentState, handleStudent] = useForm("mvovelar");

  const [formSwitch, handleFormSwitch] = useState(true);

  const SwitchForm = (event) => {
    handleFormSwitch(prevVal => !prevVal);
  }

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await sendMessage(formData);
  //     setFormData({
  //       name: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //     alert("Message Posted");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  const GreenSwitch = withStyles({
    switchBase: {
      color: "rgba(27, 161, 45, 1)",
      '&$checked': {
        color: "rgba(27, 161, 45, 1)",
      },
      '&$checked + $track': {
        backgroundColor:"rgba(27, 161, 45, 1)",
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className="contact">
      <div className="contact-container">
        <div className="left">
          <h3>Let's get in touch</h3>
          <p>We're open for any suggestion or just to have a chat</p>
          <div className="contact_info">
            <span>
            <CallIcon fontSize="medium"/>
            </span>
            <div className="info_text">
            <p><strong>Contact:</strong> +1 (227) 981-1234</p>
            </div>
          </div>
          <div className="contact_info">
            <span>
            <LocationOnIcon fontSize="medium"/>
            </span>
            <div className="info_text">
            <p><strong>Address:</strong> 200 University Avenue W, Waterloo, ON</p>
            </div>
          </div>
          <div style={{ height: '50%', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyDEuUQvCnFiWhrdAaOzk5BzLybGe4sPGhY" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}>
            </GoogleMapReact>
          </div>
        </div>
        <div className="right">
          <h3>Get in touch</h3>
          <Typography component="div">
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Form for Students</Grid>
              <Grid item>
                <GreenSwitch
                  size = "medium"
                  checked={formSwitch}
                  onChange={SwitchForm}
                  name="formSwitch"
                />
              </Grid>
              <Grid item>Form for Clients</Grid>
            </Grid>
          </Typography>
          <form onSubmit={formSwitch? handleClient : handleStudent} className="form">
            <div className="input-col">
              <div className="divided-col">
                <div className="half">
                  <div className="input-box">
                    <label className="label" for="name">
                      Full Name
                    </label>
                    <input
                      placeholder="Name"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="half">
                  <div className="input-box">
                    <label className="label" for="email">
                      Email
                    </label>
                    <input
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              {formSwitch? <div className="input-box">
                <label className="label" for="subject">
                  Company Name
                </label>
                <input
                  placeholder="Company Name"
                  name="company_name"
                  id="company_name"
                  value={formData.company_name}
                  onChange={(e) =>
                    setFormData({ ...formData, company_name: e.target.value })
                  }
                />
              </div> : <div className="input-box">
                <label className="label" for="subject">
                  University
                </label>
                <input
                  placeholder="Ex: University of Waterloo"
                  name="university"
                  id="university"
                  value={formData.university}
                  onChange={(e) =>
                    setFormData({ ...formData, university: e.target.value })
                  }
                />
              </div>}
              <div className="input-box">
                <label className="label" for="subject">
                  Subject
                </label>
                <input
                  placeholder="Subject"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />
              </div>
              <div className="input-box">
                <label className="label" for="message">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  rows="4"
                  cols="30"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
              <div className="input-box">
                <input
                  type="submit"
                  value="Send Message"
                  id="message-button"
                  // onClick={onSubmit}
                  disabled={formSwitch? clientState.submitting : studentState.submitting}
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
