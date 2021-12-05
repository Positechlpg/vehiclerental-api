const ServiceResponse = (data, status, message = 'success', error = null ) =>{
    
  const resultPrint = {}
    resultPrint.message = message
    resultPrint.status = status
    resultPrint.data = data
    resultPrint.error = error
    return resultPrint
  }
  
  module.exports = ServiceResponse;