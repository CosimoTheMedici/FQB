export const classificationDetailsInitialState = {
  name: "",
  description: "",
  created_by: 0,
};

export const unitsDetailsInitialState = {
  property_id: 0,
  rent: 0,
  classification_id: 0,
  name: "",
  water_charge: 0,
  kplc_charge: 0,
  garbage_charge: 0,
  description: "",
  occupied: 0,
  status: 0,
  created_by: 0,
};

export const propertiesDetailsInitialState = {
  name: "",
  address: "",
  email: "",
  phone: "",
  location: "",
  user_id: 0,
  owner: 0,
  active: true,
  description: "",
};

export const tenantDetailsInitialState = {
  first_name: "",
  last_name: "",
  id_number: "",
  email_address: "",
  phone_number: "",
  emergency_phone_number: "",
  emergency_relation: "",
  emergency_names: "",
  unit_id: 0,
  property_id: 0,
};
