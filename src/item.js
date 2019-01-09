import React, { Component } from 'react';

class Item extends Component {

    constructor() {
        super();
        this.state = {
            title: []
        }
    }
    componentDidMount() {
        fetch("http://reader-rookiez-scans.com.br/api.php?title_name=Capture&chapter=2")
        .then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
            let title_data = 
                
                    <div>
                        <p>{data.title_name}</p>
                        {data.pages.map( page => {
                            let image_source = 'http://www.reader-rookiez-scans.com.br/reader/Capture/2/' + page;
                            return (
                            <div styles={{left:'20%'}}>
                                          <img src={image_source} styles={{width:'720px'}}/>	
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