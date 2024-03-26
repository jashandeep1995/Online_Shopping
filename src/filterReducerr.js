
export const iss={
    sorting_value:"Price, Low to High"
  };
  
export const filterReducerr=(state,action) =>{

    switch(action.type)
    {
    case "GET_SORT_VALUE":
        console.log("Seerat");
        let userSortValue = document.getElementById("sort");
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
       console.log(sort_value);
        return {
        ...state,
        sorting_value: sort_value,
       }

    default: return state;
    }


}

