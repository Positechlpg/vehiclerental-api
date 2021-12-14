const httpResponse = (res, result) =>{
    const {status, error, data, message,offset,limit,total_data,total_page} = result
    const resultPrint = {}
    resultPrint.status = message || 'success'
    resultPrint.statusCode = status
    resultPrint.data = data || null
    resultPrint.error = error || null
    resultPrint.offset = offset
    resultPrint.limit = limit
    resultPrint.total_data = total_data
    resultPrint.total_page = total_page
    res.status(status).json(resultPrint)
  }
  
  module.exports = httpResponse;