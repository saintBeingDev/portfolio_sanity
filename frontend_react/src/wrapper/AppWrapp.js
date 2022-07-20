import React from 'react'
import { NavigationDots, SocialMedia } from '../components'

// ! this is higher order component
const AppWrapp = (Component,idName, classNames) => function Hoc() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>

        <div className='app__wrapper app__flex'>
            <Component/>

            <div className="copyright">
                <p className='p-text'>@2022 </p>
                <p className='p-text'>All rights reserved </p>
                
            </div>
        </div>
        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrapp