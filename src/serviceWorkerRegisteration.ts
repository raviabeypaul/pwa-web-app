import {Workbox} from 'workbox-window';
export default function registerServiceWorker(){
    console.log("Env = ", process.env.NODE_ENV)
    if('production'!== process.env.NODE_ENV){
        return
    }

    if('serviceWorker' in navigator){
        const wp = new Workbox('sw.js');
        wp.addEventListener('installed', event=>{
            //if the app is updated
            console.log("workbox sw installed")
            if(event.isUpdate){
                if(confirm('New App Update is Available, Click Ok to Refresh')){
                    window.location.reload()
                }
            }
        })
        wp.register();
    }
}