function updateEmployeeWithKeyAndValue(employee, key, value){
   return {...employee,
    [key]:value
  };
    
}
    const employee = {name:"roy",streetAddress:"wuhan"};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
      employee[key] = value;
      return employee;
}
     
    const newEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streerAddress", "nvalue")
    function deleteFromEmployeeByKey(employee, key){
       const newEmployee= {...employee};
       delete newEmployee[key];
        return newEmployee;
        
    }
     function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key];
        return employee;
     } 
     