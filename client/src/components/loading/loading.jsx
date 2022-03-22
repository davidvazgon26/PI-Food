import ScopedAnimations from '../animacion/ScopedAnimations.jsx'

import s from './loading.module.css'

export default function Loading(){
    return (
        <div className={s.loading}>
             <ScopedAnimations/> Loading...
        </div>
    )
}