const httpResponse = (res, result) =>{
    const {status, error, data, message} = result
    const resultPrint = {}
    resultPrint.status = message || 'success'
    resultPrint.statusCode = status
    resultPrint.data = data
    resultPrint.error = error || null
    res.status(status).json(resultPrint)
  }
  
  module.exports = httpResponse;