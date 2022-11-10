//jshine esversion:6


module.exports.getDate = getDate;
function getDate()    {
const today = new Date();
    

    const dateOptions = {
        weekday:'long',
        day: 'numeric',
        month: 'long'
    }  ;
    let day = today.toLocaleDateString("en-US", dateOptions) ;
    return day;
};

module.exports.getDay = getDay;
function getDay()    {
const today = new Date();
    const dateOptions = {
        weekday:'long',
    }  ;
    let day = today.toLocaleDateString("en-US", dateOptions) ;
    return day;
};