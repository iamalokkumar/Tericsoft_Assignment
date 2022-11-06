import React from 'react'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import dayjs, { Dayjs } from "dayjs";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import FormLabel from "@mui/material/FormLabel";

import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEffect } from "react";
// import Editmodals from "./Editmodals";
const Editmodals = ({elem,userDetails}) => {

    const [opens, setOpens] = React.useState(false);

    
  let [names, setNames] = useState("");
  let [mails, setMails] = useState("");
  let [numbers, setNumbers] = useState("");
  let [hobbies, setHobbies] = useState("");
  let [genders, setGenders] = useState("");
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);
  let myFuns=(id)=>{
    console.log(id)
    const payloads = {
      name: names,
      email: mails,
      phone: numbers,
      gender: genders,
      hobbies: hobbies,
    };
    axios.put(`https://projectteric.herokuapp.com/data/${id}`,payloads)
    .then((res)=>{
    
      userDetails()

    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div>
       
       
                <Button onClick={handleOpens}>Edit Data</Button>
      <Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <FormControl>
                <OutlinedInput
                  placeholder="Name"
                  size="small"
                  onChange={(e) => {
                    setNames(e.target.value);
                  }}
                  value={names}
                />
                <br />
                <OutlinedInput
                  placeholder="Email"
                  size="small"
                  onChange={(e) => {
                    setMails(e.target.value);
                  }}
                  value={mails}
                />
                <br />
                <OutlinedInput
                  placeholder="Phone"
                  size="small"
                  onChange={(e) => {
                    setNumbers(e.target.value);
                  }}
                  value={numbers}
                />
                <br />

                <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="gender"
                  onChange={(e) => {
                    setGenders(e.target.value);
                  }}
                  value={genders}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
                <br />
                <h3>Hobbies:</h3>
                <Box style={{ display: "flex" }}>
                  <h4>Gardening</h4>
                  <Checkbox
                    value="Gardening"
                    onClick={(e) => {
                      setHobbies(e.target.value);
                    }}
                  />
                </Box>
                <Button
                  variant="contained"
                  style={{ marginLeft: "auto" }}
                  onClick={()=>{myFuns(elem.id)}}
                >
                  Submit
                </Button>
              </FormControl>
          </Typography>
        </Box>
      </Modal>
               
               
    </div>
  )
}

export default Editmodals