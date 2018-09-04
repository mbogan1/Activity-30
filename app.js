const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
 
let command = prompt("Enter a command");

if (command === 'print'){

    for (let i = 0; i < employeeList.length; i++){

      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
      
    }

} else if (command === 'verify'){

    const nameInput = prompt('Enter employee name');
    let isListed = new Boolean(false);


    for (let i = 0; i < employeeList.length; i++){

        if (nameInput === employeeList[i].name){
        render(isListed);
        break;

        }else{
          let isListed = false;
          render(isListed);
          break;
        }

    }
} else if (command === 'lookup'){

    const nameInput = prompt('Enter employee name');
    for (let i = 0; i < employeeList.length; i++){

      if (employeeList[i].name === nameInput){

      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}else if (command === 'contains'){

  const containsInput = prompt('Enter a part of an employee name');

  for (let i = 0; i < employeeList.length; i++){

    if(employeeList[i].name.startsWith(containsInput)){

      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);

    }

  }

}else if (command === 'update'){

  const nameInput = prompt('Enter a name to update');
  const fieldInput = prompt('Enter a field you would like to update');
  const valueInput = prompt('Enter a new value');

  for (let i = 0; i < employeeList.length; i++){
  
    if (nameInput === employeeList[i].name){
        employeeList[i.fieldInput] = valueInput;
        render(employeeList[i].name);
        render(employeeList[i.fieldInput]);
      
        
  }
}

}else if (command === 'add'){

    const newName = prompt('Enter a name to add');
    const newOfficeNum = prompt('Enter an office number');
    const newPhoneNum = prompt('Enter a phone number');

  var newEmployee = {
    name: newName,
    officeNum: newOfficeNum,
    phoneNum: newPhoneNum

  }
  
  employeeList.push(newEmployee)
  
for (let i = 0; i < employeeList.length; i++){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }

}else if (command === 'delete'){

  const removeName = prompt('Enter a name to delete')

  for (let i = 0; i < employeeList.length; i++){

  if (employeeList[i].name === removeName){

   var indexNum = employeeList.indexOf(name);

   employeeList.splice(indexNum, 1);
    break;
  }
   render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
    
   

  }
  }else if (command === 'sort'){

    for (let i = 0; i < employeeList.length; i++){
     
      employeeList.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); 
        var nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

      render(employeeList[i].name);
    }
  }