function menuClick(newshow) {
  console.log(newshow)
  document.getElementsByClassName('show')[0].className='noshow';
  // show the one dive that you sent to this function
  if (newshow==="show1"){
     document.getElementById(newshow).className="Video show";
  } else if  (newshow==="show2"){
     document.getElementById(newshow).className="NCQAContent show";
  } else if  (newshow==="show3"){
     document.getElementById(newshow).className="testimonialContent show";
  } else if  (newshow==="show4"){
     document.getElementById(newshow).className="AboutUsContent show";
  } else if  (newshow==="show5"){
    document.getElementById(newshow).className="contactUsContent show";
  }
}




