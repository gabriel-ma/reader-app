import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Item extends Component {

    constructor() {
        super();
        this.state = {
            title: []
        }
    }
    componentDidMount() {
        fetch("https://reader-rookiez-scans.com.br/api.php?title_name=Capture&chapter=4")
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            let title_data = 
                
                    <div>
                        <p>{data.title_name}</p>
                        {data.pages.map( page => {
                            let image_source = 'http://www.reader-rookiez-scans.com.br/reader/Capture/4/' + page + '.png';
                            return (
                            <div style={{left:'20%'}} className={'item'}>
                                          <img src={image_source} className={'img-fluid'} style={{width:'720px'}}/>	
                		    </div>)
                        }

                        )}
                    </div>
                
            
            this.setState({title:title_data})
        }
        )
    }
    render() {
        return (
        <div>
            {this.state.title}
        </div>)
    }
}

export default Item;