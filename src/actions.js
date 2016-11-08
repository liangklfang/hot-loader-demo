export default {
  nextStep: () => ({
    type: 'NEXT'
  }),
  prevStep: () => ({
    type: 'PREVIOUS'
  }),
  setLocation: (routerState, action = 'PUSH') => ({
    type: 'LOCATION_CHANGE',
    router: {
      action,
      location: routerState
    }
  })
}
