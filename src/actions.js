import { push } from 'react-router-redux';


export default {
  nextStep: () => ({
    type: 'NEXT'
  }),
  prevStep: () => ({
    type: 'PREVIOUS'
  }),
  setLocation: (location) => push(location)
}
