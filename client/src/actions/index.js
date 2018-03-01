export const getNewLink = url => {
    console.log(url);
    return {
      type: 'GET_NEW_LINK',
      url
    }
  }