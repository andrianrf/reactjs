import React, { Component, createContext } from "react";

const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (ChildrenComponent) =>{
    return(
        class ParentProvider extends Component {
            state = {
                totalOrder: 0
            }

            dispatch = (action) => {
              if(action.type === 'PLUS_ORDER'){
                return this.setState({
                  totalOrder: this.state.totalOrder + 1
                })
              }
              if(action.type === 'MINUS_ORDER'){
                if(this.state.totalOrder>0){
                    return this.setState({
                      totalOrder: this.state.totalOrder - 1
                    })
                }
              }
            }

            render(){
                return(
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <ChildrenComponent {...this.props} />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (ChildrenComponent) => {
    return (
        class ParentConsumer extends Component {
            render(){
                return (
                    <Consumer>
                    {
                        value => {
                            return(
                                <ChildrenComponent {...this.props} {...value} />
                            )
                        }
                    }
                </Consumer>
                )
            }
        }
    )
}