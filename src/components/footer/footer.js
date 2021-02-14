import React from 'react';
import './footer.css'


export default class App extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="footer__div">
                        <div className="footer__name">Денис Сергеев</div>
                        <a href="http://vk.com/den10004"><i className="fa fa-vk" id="social"></i></a>
                        <a href="https://github.com/den10004"><i className="fa fa-github" id="social"></i></a>
                        <div className="footer__name">2020</div>
                    </div>
                </footer>
            </div>


        )
    }


}