const pagination = (data, totalData,limit, offset,status, message = 'success', error = null ) => {
    
    const totalPage = Math.ceil(totalData / limit);

    const resultPrint = {
      offset: offset ?? null,
      limit: limit || null,
      total_data: totalData || 0,
      total_page: totalPage || 0,
      message: message || null,
      status: status || 500,
      err: error || null,
      data: data || null,
    };
    return resultPrint
  }
  
  module.exports = pagination;