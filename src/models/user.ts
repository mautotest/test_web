export const delay = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

export default {
    state:{
        Session:""
    },
    
    reducers: {
      updateSession (state, session) {
        state.Session = session;
      },
    },
}