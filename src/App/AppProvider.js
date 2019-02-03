import React from 'react'

const cc = require('cryptocompare')
export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: 'dashboard',
            ...this.saveSettings(),
            setPage: this.setPage,
            confirmFavorites: this.confirmFavorites
        }
    } 
    componentDidMount

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard'
        })
        localStorage.setItem('cryptoDash', JSON.stringify({
            test: 'hello jello'
        }));
        // console.log('Hello for now');
    }
    saveSettings(){
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData){
            return {page: 'settings', firstVisit: true}
        }
        return {};
    }

    setPage = page => this.setState({page})

    render(){
        return(
            <AppContext.Provider value={this.state}>
            {this.props.children}
            </AppContext.Provider>
        )
    }

}
