import Ember from 'ember';

const communityPropertyTypes = [
  "Condo",
  "Townhouse",
  "Apartment"
]
export function rentalPropertyType([type]) {
  if(communityPropertyTypes.includes(type)){
    return 'Community';
  }
  return 'StandAlone'
}

export default Ember.Helper.helper(rentalPropertyType);
