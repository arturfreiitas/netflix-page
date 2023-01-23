import React from 'react';

function Cards(){
    return (
        <div className='container'>
            <h1>Quem está assistindo?</h1>
            <div class="card-deck">
                <div class="card">
                    <img src={require('../images/bruno.jpeg')} class="card-img-top" alt="Card 1"/> 
                    <h5 class="card-title">Bruno</h5>
            
                </div>
                
                <div class="card">
                    <img src={require('../images/dog.png')} class="card-img-top" alt="Card 2"/> 
                    <h5 class="card-title">João</h5>


                </div>  
                
                <div class="card">
                    <img src={require('../images/net.png')} class="card-img-top" alt="Card 3"/> 
                    <h5 class="card-title">Maurício</h5>
            
                </div>    
                
                <div class="card">
                    <img src={require('../images/erika.jpeg')} class="card-img-top" alt="Card 4"/> 
                    <h5 class="card-title">Erika</h5>
            
                </div>    
                
                <div class="card">
                    <img src={require('../images/infantil.jpeg')} class="card-img-top" alt="Card 5"/> 
                    <h5 class="card-title">Infantil</h5>
            
                </div>                  
            </div>
        </div>
        




    )



}
export default Cards;


