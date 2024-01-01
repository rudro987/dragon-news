export const getCurrentDate = () => {
    const currentDate = new Date();
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = days[currentDate.getDay()];
    const month = monthsOfYear[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    return `${day}, ${month}, ${date}, ${year}`;
  }
  