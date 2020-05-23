export const bgGreyDecorator = () =>{
  return {
    data:()=>(
    {
      styles:{
        padding: '20px',
        background: '#eee',
      }
    }),
    template:`
      <div :style="styles"><story/></div>
    `
  }
} 