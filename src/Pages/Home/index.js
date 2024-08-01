import './home.css'

function Home() {
    return (
        <div class="home row">
            <div className="column">
                <div class="row card">
                    <table>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Idade</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>João</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Maria</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>José</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Carlos</td>
                            <td>30</td>
                        </tr>
                    </table>
                </div>
                <div class="row card">
                <table>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Idade</th>
                        </tr>
                        <tr>
                            <td>01</td>
                            <td>João</td>
                            <td>20</td>
                        </tr>
                        <tr>
                            <td>02</td>
                            <td>Maria</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <td>03</td>
                            <td>José</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>04</td>
                            <td>Carlos</td>
                            <td>30</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="column-two">
                <div className='graficos'>Grafico</div>
            </div>
        </div>
    );
}
export default Home;