const initialState = {
    comment: [
        {name: 'Yone', content: 'Hi!Yasuo', avatar: `https://i.pravatar.cc/50?u=yone`},
        {name: 'Yasuo', content: 'Hi!Yasuo', avatar: `https://i.pravatar.cc/50?u=yasuo`}
    ]
}


 const FakeBookReducer = (state = initialState, action) => {
  switch (action.type) {

  case 'add_comment':{
    state.comment = [...state.comment, action.userComment];
    return { ...state}
  }
   

  default:
    return {...state}
  }
}

export default FakeBookReducer;
