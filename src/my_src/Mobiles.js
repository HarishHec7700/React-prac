import React from 'react'
import Mobsect from './Mobsect'

function Mobiles() {
    const mobiles=[
        {
            "head":'Honor Magic 5',
            "img":"https://www.hihonor.com/content/dam/honor/global/product-list/smartphone/honor-magic-v/honor-magic-v-list-orange.png",
            "des":"12gb Ram",
            "price":"65,000",

        },
        {
            "head":'Poco Gt F3',
            "img":'https://www.91-cdn.com/hub/wp-content/uploads/2022/04/POCO-F3-GT.jpg',
            "des":"8gb Ram",
            "price":"28,000",

        },
        {
            "head":'Huawei P50 ',
            "img":"https://cdn.dxomark.com/wp-content/uploads/medias/post-88973/featured_huaweip50pro.jpg",
            "des":"12gb Ram",
            "price":"69,000",
        },
    ]
  return (
    <div className='mobiles-list'>
        {
    mobiles.map((mobiles) =>{
                  return <Mobsect names={mobiles}/>
                } 
            ) 
}
    </div>          
    )}
export default Mobiles ;


/* <> <Mobsect names="Harish" post="CEO"></Mobsect>
 <Mobsect names="Vijayan"></Mobsect>
  /* {console.log(props.head)} */
//  </> 
//  } 
