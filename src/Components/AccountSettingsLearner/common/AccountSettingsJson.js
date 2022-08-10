// export const value01 =[
//     {
//         title :"Full Name",
//         type :"text",
//         name:"fullName",

//     },
//     {
//         title :"Date of Birth",
//         type :"date",
//         name:"dateOfBirth",

//     }
// ]
export const value01 = [
  {
    title: "Full Name",
    type: "text",
    name: "fullName",
  },
  // {
  //     title :"Date of Birth",
  //     type :"date",
  //     name:"dateOfBirth",

  // }
];

export const additionalAddressSchema = [
  {
    title: "House/Flat Number",
    type: "text",
    // name:"additionalAddress.houseNumber",
    name1: "houseNumberAdditionalAddress",
  },
  {
    title: "Street Name",
    type: "text",
    name: "additionalAddress.streetName",
    name1: "streetNameAdditionalAddress",
  },
  {
    title: "Area",
    type: "text",
    name: "additionalAddress.area",
    name1: "areaAdditionalAddress",
  },
  {
    title: "Landmark(if any)",
    type: "number",
    name: "additionalAddress.landmark",
    name1: "landmarkAdditionalAddress",
  },
  {
    title: "Zip Code",
    type: "number",
    name: "additionalAddress.zipCode",
    name1: "zipCodeAdditionalAddress",
  },
  {
    title: "City",
    type: "text",
    name: "additionalAddress.city",
    name1: "cityAdditionalAddress",
  },
  {
    title: "State",
    type: "text",
    name: "additionalAddress.state",
    name1: "stateAdditionalAddress",
  },
];

export const billingAddressSchema = [
  {
    title: "House/Flat Number",
    type: "text",
    name: "houseNumber",
  },
  {
    title: "Street Name",
    type: "text",
    name: "streetName",
  },
  {
    title: "Area",
    type: "text",
    name: "area",
  },
  {
    title: "Landmark(if any)",
    type: "number",
    name: "landmark",
  },
  {
    title: "Zip Code",
    type: "number",
    name: "zipCode",
  },
  {
    title: "City",
    type: "text",
    name: "city",
  },
  {
    title: "State",
    type: "text",
    name: "state",
  },
];
