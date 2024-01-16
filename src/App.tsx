import sample from './assets/sample.jpg'
export const App = () => {

  return <>
    <img src={sample} height={300} width={300} /><h1>React Typescript Started Template : {process.env.NODE_ENV}</h1>  
  </>
}