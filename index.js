module.exports = promise => {
	
  let status = false
  
  promise = promise(() => {
  	status = true
  })

  return {
   	promise,
  	status: () => status
  }
  
}
