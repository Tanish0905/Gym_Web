import { Check } from "lucide-react";
import {X} from "lucide-react";

import { Box } from '@mui/material';
// import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
      features: [{enable:true, title:'Lockers'},{enable:false, title:'Personalized Diet Plan'},{enable:false, title:'Personal Training'},{enable:false, title:'10 Days Freezing Option'}]
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF YEAR",
      price: 35000,
      length: 6,
      features: [{enable:true, title:'Lockers'},{enable:true, title:'10 Days Freezing Option'},{enable:true, title:'Personalized Diet Plan'},{enable:false, title:'Personal Training'}, ]
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
      features: [{enable:true, title:'Lockers'},{enable:true, title:'Personal Training'},{enable:true, title:'20 Days Freezing Option'},{enable:true, title:'Personalized Diet Plan'} ]
    },
  ];
  return (
    <section className="pricing">
      <h1>IRON WORLD FITNESS PLANS</h1>
      <Box className="wrapper">
        {pricing.map((element) => {
          return (
            <Box className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <Box className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </Box>
              <Box className="description">
              {element.features.map((feature, index) => (
                <p key={index}>
                  {feature.enable ?<Check color="green" size={24} /> : <X color="red" size={24}/>} {feature.title}
                </p>
              ))}
            </Box>
            </Box>
          );
        })}
      </Box>
    </section>
  );
};

export default Pricing;