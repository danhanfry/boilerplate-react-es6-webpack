import request from 'request'

async function funti(){

    var w = await timew()

    console.log( 'funti', w)


    request('http://google.es', function(err, re,es){
        console.log(es)
    })
    

}

function timew(){

    return new Promise(function(resolve, reject) {

        setTimeout(function(){
            resolve('Tie')
        },5000)

    })
}



export { funti }