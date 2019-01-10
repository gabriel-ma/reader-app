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
            <div className={'row'}>
                
                <div className={'col-sm-2'} style={{display:'block'}}></div>
                    <div className={'col-sm-8'}>
                        <p>{data.title_name}</p>
                        {data.pages.map( page => {
                            let image_source = 'http://www.reader-rookiez-scans.com.br/reader/Capture/4/' + page + '.png';
                            return (
                            <div className={'item'}>
                                          <img src={image_source} className={'img-fluid'} style={{width:'720px', display: 'block',marginLeft: 'auto',marginRight: 'auto'}}/>	
                		    </div>)
                        }

                        )}
                    </div>
                    <div className={'col-sm-2'}></div>
                 </div>
                
            
            this.setState({title:title_data})
        }
        )
    }
    render() {
        let bgColors = { "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#37BC9B",
    "Green": "#8CC152","Red": "#E9573F","Yellow": "#F6BB42",
};
        return (
        <div className={'container-fluid'} style={{backgroundColor:bgColors.Yellow}}>
            {this.state.title}
        </div>)
    }
}

export default Item;