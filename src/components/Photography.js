import React from 'react';
import './css/Photography.css';
import Photo from './Photo';
import photolist from './photolist';

export default function Photography(props) {
    // console.log( props );
    return (
        <div className="photography">
            <h2>Photography</h2>
            <p className="photo-description">
                I'm very passionate about analog photography and develop my films myself. Here I just present a small amount of the pictures I've taken. Feel free to take a look around at my <a href="https://www.instagram.com/klaus.mistlberger/" target="_blank" rel="noreferrer">Instagram</a> or <a href="https://www.lomography.com/homes/threolin" target="_blank" rel="noreferrer">Lomo Home</a>.
            </p>
            
            {
                !props.slideshow && 
                <Photo 
                    photos={photolist}
                    openSlideshow={props.openSlideshow}
                />
            }
            

            {
                !props.slideshow && 
                <div className="photo-equipment">
                    <h3 className="equipment-list">Equipment</h3>
                    <h4 className="equipment-list">Cameras</h4>
                    <ul className="equipment-list">
                        <li>Nikon F2</li>
                        <li>Lomo LC-A</li>
                        <li>Lomography Sprocket Rocket</li>
                        <li>Lomo’Instant Automat Glass</li>
                        <li>Fujifilm Instax Mini 90 Neo Classic</li>
                    </ul>
                    <br />
                    <h4 className="equipment-list">Films</h4>
                    <ul className="equipment-list">
                        <li className="listbreak">CineStill 800T</li>
                        <li>Fomapan 100</li>
                        <li className="listbreak">Fomapan 400</li>
                        <li>Ilford Delta 100</li>
                        <li>Ilford Delta 400</li>
                        <li>Ilford Delta 3200</li>
                        <li className="listbreak">Ilford HP5+</li>
                        <li>Kodak Ektar 100</li>
                        <li>Kodak Gold 200</li>
                        <li className="listbreak">Kodak Portra 400</li>
                        <li>LomoChrome Metropolis</li>
                        <li>LomoChrome Purple</li>
                        <li>Lomography Color Negative 400</li>
                        <li className="listbreak">Lomography Color Negative 800</li>
                        <li>Revolog Kolor</li>
                    </ul>
                    <br />
                    <h4 className="equipment-list">Chemicals</h4>
                    <ul className="equipment-list">
                        <li>Rodinal</li>
                        <li>Tetenal C41</li>
                    </ul>
                </div>
            }
            

        </div>
    );
};