import React from 'react';

import './Panel.scss'
import prev from './assets/prev.svg'
import next from './assets/next.svg'

const Panel: React.FC = () => {
    return (
        <div className="panel">
            <h2>Últimas postagens</h2>
            <table>
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Autor</th>
                    <th>Data de publicação</th>
                    </tr>                    
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet</td>
                        <td>Moovin Plataforma E-commerce</td>
                        <td>19/05/2019</td>
                    </tr>
                </tbody>
            </table>
            <div className="footer">
                    <div className="count">
                        <p>Exibindo 9 postagens</p>
                    </div>
                    <ul className="pages">
                        <li><a href="#"><img src={prev} alt="Anterior"/></a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#"><img src={next} alt="Próximo"/></a></li>
                    </ul>
                </div>            
        </div>
    )
}

export default Panel