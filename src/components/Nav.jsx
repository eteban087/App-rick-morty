import '../css/Nav.css'
// import { SearchLocation } from './SearchLocation'

export const Nav = () => {

    return (
        <>
            <header className='header'>

                {/* ==============IMAGEN SUPERIOR DEL HEADER=========== */}
                <div className="imagen_header">
                    <img src="/img/headerImage.svg" alt="" />
                    <div className="title_header">
                        <img className='img_circle' src="/img/titleHeader.svg" alt="" />
                    </div>
                </div>


            </header>
        </>
    )
}
