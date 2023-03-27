import React from 'react'
import logo from './logoPP.jpg'

export default function Login() {

    function handleinputsLogin() {
        var username = document.getElementById("userName").value;
        var passw = document.getElementById("passw").value;
        alert(username)
        alert(passw)
    }


    function handleinputsRegistration(){
        var usernameReg = document.getElementById("benutzerReg").value;
        var passwReg = document.getElementById("passwReg").value;
        var jahrgangReg = document.getElementById("jahrgangReg").value;
        var emailReg = document.getElementById("emailReg").value;
        var firstnameReg = document.getElementById("vornameReg").value;
        var lastnameReg = document.getElementById("nachnameReg").value;
        alert(usernameReg)
        alert(firstnameReg)
        alert(lastnameReg)
        alert(jahrgangReg)
        alert(emailReg)
        alert(passwReg)
    }

    return (
        <>
            <div>
                <title>Anmeldung</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" href={logo} />
                <style dangerouslySetInnerHTML={{ __html: "\n    body {\n    background-color: #2c2c2c;\n    color: #FFB043;\n    margin-top: 100px;\n    width: 100%;\n    }\n\n.submit {\n    background-color: #FFB043;\n}\n\n#logoStartPage {\n    width: 100%;\n    margin-top: -80px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\nfooter {\n    padding-top: 50px;\n    height: 130px;\n    margin-top: 10.5%;\n    background-color: #FFB043;\n    color: #2c2c2c;\n    text-align: center;\n}\n\n.btSign {\n    position: relative;\n    padding: 12px 35px;\n    background: #FFB043;\n    font-size: 20px;\n    font-weight: 500;\n    color: #2c2c2c;\n    border: 3px solid #FFB043;\n    border-radius: 8px;\n    box-shadow: 0 0 0 #FFB043;\n    transition: all .3s ease-in-out;\n}\n\n.star-1 {\n    position: absolute;\n    top: 20%;\n    left: 20%;\n    width: 25px;\n    height: auto;\n    filter: drop-shadow(0 0 0 #fffdef);\n    z-index: -5;\n    transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);\n}\n\n.star-2 {\n    position: absolute;\n    top: 45%;\n    left: 45%;\n    width: 15px;\n    height: auto;\n    filter: drop-shadow(0 0 0 #fffdef);\n    z-index: -5;\n    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-3 {\n    position: absolute;\n    top: 40%;\n    left: 40%;\n    width: 5px;\n    height: auto;\n    filter: drop-shadow(0 0 0 #fffdef);\n    z-index: -5;\n    transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-4 {\n    position: absolute;\n    top: 20%;\n    left: 40%;\n    width: 8px;\n    height: auto;\n    filter: drop-shadow(0 0 0 #fffdef);\n    z-index: -5;\n    transition: all .8s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-5 {\n    position: absolute;\n    top: 25%;\n    left: 45%;\n    width: 15px;\n    height: auto;\n    filter: drop-shadow(0 0 0 #fffdef);\n    z-index: -5;\n    transition: all .6s cubic-bezier(0, 0.4, 0, 1.01);\n}\n\n.star-6 {\n    position: absolute;\n    top: 5%;\n    left: 50%;\n    width: 5px;\n    height: auto;\n    filter: drop-shadow(0 0 0 #fffdef);\n    z-index: -5;\n    transition: all .8s ease;\n}\n\nbutton:hover {\n    background: transparent;\n    color: #FEC195;\n    box-shadow: 0 0 25px #fec1958c;\n}\n\nbutton:hover .star-1 {\n    position: absolute;\n    top: -80%;\n    left: -30%;\n    width: 25px;\n    height: auto;\n    filter: drop-shadow(0 0 10px #fffdef);\n    z-index: 2;\n}\n\nbutton:hover .star-2 {\n    position: absolute;\n    top: -25%;\n    left: 10%;\n    width: 15px;\n    height: auto;\n    filter: drop-shadow(0 0 10px #fffdef);\n    z-index: 2;\n}\n\nbutton:hover .star-3 {\n    position: absolute;\n    top: 55%;\n    left: 25%;\n    width: 5px;\n    height: auto;\n    filter: drop-shadow(0 0 10px #fffdef);\n    z-index: 2;\n}\n\nbutton:hover .star-4 {\n    position: absolute;\n    top: 30%;\n    left: 80%;\n    width: 8px;\n    height: auto;\n    filter: drop-shadow(0 0 10px #fffdef);\n    z-index: 2;\n}\n\nbutton:hover .star-5 {\n    position: absolute;\n    top: 25%;\n    left: 115%;\n    width: 15px;\n    height: auto;\n    filter: drop-shadow(0 0 10px #fffdef);\n    z-index: 2;\n}\n\nbutton:hover .star-6 {\n    position: absolute;\n    top: 5%;\n    left: 60%;\n    width: 5px;\n    height: auto;\n    filter: drop-shadow(0 0 10px #fffdef);\n    z-index: 2;\n}\n\n.fil0 {\n    fill: #FFFDEF\n}\n\n.toAccount :hover{\n    text-decoration-line: underline;\n}\n\n.container {\n    /*border: solid #FFB043;*/\n    margin-top: 50px;\n    width: 450px;\n    position: relative;\n    border-radius: 5px;\n    overflow: hidden;\n    box-shadow: 1.5px 1.5px 3px #000000, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #000000, inset 0px -0px 0px #5f5e5e;\n}\n\n.container .slider {\n    width: 200%;\n    position: relative;\n    transition: transform ease-out 0.3s;\n    display: flex;\n}\n\n#register_toggle {\n    display: none;\n}\n\n.container #register_toggle:checked + .slider {\n    transform: translateX(-50%);\n}\n\n.form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 30px;\n    padding: 1.5em 3em;\n    width: 50%;\n}\n\n.title {\n    text-align: center;\n    font-weight: 700;\n    font-size: 2em;\n}\n\nform .form_control {\n    width: 100%;\n    position: relative;\n    overflow: hidden;\n}\n\nform .form_control .label {\n    position: absolute;\n    top: 50%;\n    left: 10px;\n    transition: transform ease 0.2s;\n    transform: translate(0%, -50%);\n    font-size: 1em;\n    user-select: none;\n    pointer-events: none;\n    color: #b0b0b0;\n}\n\nform .form_control .input {\n    width: 100%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    color: #fff;\n    padding: 0.5rem;\n    font-size: 0.75rem;\n    border-radius: 5px;\n    transition: box-shadow ease 0.2s;\n    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 1.5px 1.5px 3px #0e0e0e, inset -1.5px -1.5px 3px #5f5e5e;\n}\n\nform .form_control .input:focus,\nform .form_control .input:valid {\n    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;\n}\n\nform .form_control .input:focus + .label,\nform .form_control .input:valid + .label {\n    transform: translate(-150%, -50%);\n}\n\nform button {\n    width: 100%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    color: #fff;\n    padding: 0.5rem;\n    font-size: 0.75rem;\n    border-radius: 5px;\n    transition: box-shadow ease 0.1s;\n    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;\n}\n\nform button:active {\n    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;\n}\n\n.bottom_text {\n    font-size: 0.65em;\n    font-size: medium;\n}\n\n.bottom_text .swtich {\n    font-weight: 700;\n    font-size: medium;\n    cursor: pointer;\n}\n\n.bottom_text :hover{\n    text-decoration: underline;\n}\n\n@media screen and (max-width: 450px) {\n    .left, .main, .right {\n        width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\n    }\n    body{\n        width: 100%;\n        text-align: center;\n    }\n    #logoStartPage {\n        width: 100%;\n        visibility: visible;\n        text-align: center;\n\n    }\n    img{\n        width: 300px;\n        height: auto;\n        text-align: center;\n    }\n    footer{\n        visibility: hidden;\n    }\n}\n" }} />
                <div id="logoStartPage" name="logoStartPage">
                    <img src={logo} width={450} />
                </div>
                <div className="container">
                    <input id="register_toggle" type="checkbox" />
                    <div className="slider">
                        <form className="form">
                            <span className="title">Anmeldung</span>
                            <div className="form_control">
                                <input required id="userName" name="userName" className="input" type="email"  defaultValue=""/>
                                <label className="label">Benutzername</label>
                            </div>
                            <div className="form_control">
                                <input required id="passw" name="passw" className="input" type="password" defaultValue=""/>
                                <label className="label">Passwort</label>
                            </div>
                            <button onClick={handleinputsLogin} className="btSign">Anmelden
                                <div className="star-1">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-2">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-3">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-4">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-5">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-6">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                            </button>
                            <span className="bottom_text">Du hast keinen Account? <label className="swtich" htmlFor="register_toggle">Registrieren</label> </span>
                        </form>
                        <form className="form">
                            <span className="title">Registrierung</span>
                            <div className="form_control">
                                <input required id="benutzerReg" name="benutzerReg" className="input" type="text" />
                                <label className="label">Benutzername</label>
                            </div>
                            <div className="form_control">
                                <input required id="vornameReg" name="vornameReg" className="input" type="text" />
                                <label className="label">Vorname</label>
                            </div>
                            <div className="form_control">
                                <input required id="nachnameReg" name="nachnameReg" className="input" type="text" />
                                <label className="label">Nachname</label>
                            </div>
                            <div className="form_control">
                                <input required id="jahrgangReg" name="jahrgangReg" className="input" type="text" />
                                <label className="label">Jahrgang</label>
                            </div>
                            <div className="form_control">
                                <input required id="emailReg" name="emailReg" className="input" type="email" />
                                <label className="label">Email</label>
                            </div>
                            <div className="form_control">
                                <input required id="passwReg" name="passwReg" className="input" type="password" />
                                <label className="label">Passwort</label>
                            </div>
                            <button onClick={handleinputsRegistration} className="btSign">Registrieren
                                <div className="star-1">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-2">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-3">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-4">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-5">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                                <div className="star-6">
                                    <svg xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 784.11 815.53" style={{ shapeRendering: 'geometricPrecision', textRendering: 'geometricPrecision', imageRendering: 'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd' }} version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg"><defs /><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer" /><path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" className="fil0" /></g></svg>
                                </div>
                            </button>
                            <span className="bottom_text">Du hast schon einen Account? <label className="swtich" htmlFor="register_toggle">Anmelden</label> </span>
                        </form>
                    </div>
                </div>
                <footer>
                    <div className="foot" name="foot" id="foot">
                        <h3>CampusDelivery 2023</h3>
                        <p>Kontakt und Impressum</p>
                    </div>
                </footer>
            </div>
        </>
    )
}