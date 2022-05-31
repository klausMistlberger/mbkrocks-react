import React from 'react';
import './css/Photography.css';

export default function Photography() {
    return (
        <div className="photography">
            <h2>Photography</h2>
            <p>
                I'm very passionate about analog photography and develop my films myself.
            </p>

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
                <li>Tetenacl C41</li>
            </ul>

        </div>
    );
};