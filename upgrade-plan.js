const { createStore } = require("redux");

const initialState = {
  profile: {
    gender: "female",
    name: {
      title: "mrs",
      first: "dânia",
      last: "da mota"
    },
    phone: "015394 16261",
    cell: "0757-275-048",
    location: {
      street: "2591 rua pará ",
      city: "teixeira de freitas",
      state: "mato grosso",
      postcode: 31682
    },
    currentPlan: "free",
    upgraded: false
  },
  plans: [
    {
      id: "33453ttt",
      name: "gold",
      cost: 3500
    },
    {
      id: "334545tt",
      name: "silver",
      cost: 2500
    }
  ]
};

/* 
create an action to upgrade the user's current plan.
*/

/* 
Write a reducer to handle the above action
Make sure to update both the plan and set the upgraded flag to true
*/

/* create a store with the initial data above and the action */

/* 
  Fire the action
*/

/* 
expected output: modified nextState
the store via store.getState() 
*/

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PLAN:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    currentPlan : action.payload,
                    upgraded : 'true'
                }
                
            };
        default:
            return state;
    }


}

const UPDATE_PLAN = 'UPDATE_PLAN'

const updatePlan = () => {
    return {
        type: UPDATE_PLAN,
        payload: "gold"
    };
};

const store = createStore(reducer)

console.log('BEFORE', store.getState())

store.dispatch(updatePlan())

console.log('AFTER', store.getState())

