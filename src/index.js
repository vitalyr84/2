import React from "react";
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay";
import SpinnerLoader from "./SpinnerLoader";


class  App extends React.Component{
    state = { lat: null, eMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            err => this.setState({eMessage: err.message})
        )
    }

    renderContent() {
        if (this.state.eMessage && !this.state.lat) {
            return <div>Error:{this.state.eMessage}</div>
        }

        if (!this.state.eMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return  <div><SpinnerLoader message="Please accept location"/></div>
    }
    render() {
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )


    }
}




ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
