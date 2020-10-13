module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length;) {
    let cuter = bracketsConfig[i].join('');

    if (str.includes(cuter)) {
      str = str.replace(cuter, '');
      i = 0;
    } else {
      i++;
    }
  }
  if (str.length == 0) {
  return true;
  } else {
  return false;
  }
  
};
