
module.exports = (table, str) => {
  let result = []

  console.time(`--> SEARCHING MOVIE(S) FROM ${str.length} TERMS`)
  if (table && str.length > 1){
    for (i=0; i<str.length; i++){
      if (i<str.length-1 && table[str[i]]) {
        let tmp = (result.length == 0) ? table[str[i]].files : result
        result = intersect(tmp, table[str[i+1]].files)  
      }
    }
  } else if (table && str.length === 1){
    result = table[str[0]].files
  }
  console.timeEnd(`--> SEARCHING MOVIE(S) FROM ${str.length} TERMS`)

  return  { movies : result } 
}

const intersect = (a, b) => {
  return a.filter(Set.prototype.has, new Set(b))
}
