const buttons=document.querySelectorAll('.button');
const body=document.querySelector("body");

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(eclick){

        console.log(eclick);
        console.log(eclick.target)

        // if(eclick.target.id==='grey'){
        //     body.style.backgroundColor=eclick.target.id;
        // }

        // if(eclick.target.id==='white'){
        //     body.style.backgroundColor=eclick.target.id;
        // }
        // if(eclick.target.id==='blue'){
        //     body.style.backgroundColor=eclick.target.id;
        // }
        // if(eclick.target.id==='yellow'){
        //     body.style.backgroundColor=eclick.target.id;
        // }

        switch(eclick.target.id){
            case'grey':
            body.style.backgroundColor=eclick.target.id;
            break;
            case'white':
            body.style.backgroundColor=eclick.target.id;
            break;
            case'blue':
            body.style.backgroundColor=eclick.target.id;
            break
            case'yellow':
            body.style.backgroundColor=eclick.target.id;
            break;
        }






    })

});




