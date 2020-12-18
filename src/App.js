import React from "react";
import Axios from "axios";
import "./gaya.css";
import "bulma/css/bulma.css";
import "bootstrap/dist/css/bootstrap.css";



export default class App extends React.Component{
    state = {
        positif: 0,
        dirawat: 0,
        sembuh: 0,
        resProv: [Array]
    }
    
    componentDidMount(){
        this.getData();

    }

    async getData() {
        const resApi = await Axios.get("http://apicovid19indonesia-v2.vercel.app/api/indonesia");
        const resProv = await Axios.get("https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi");
        this.setState({
            positif: resApi.data.positif,
            dirawat: resApi.data.dirawat,
            sembuh: resApi.data.sembuh,
            meninggal: resApi.data.meninggal,
            provinsi: resProv.data[1].provinsi,
            provinsi2: resProv.data[2].provinsi,
            provinsi3: resProv.data[3].provinsi,
            provinsi4: resProv.data[4].provinsi,
            provinsi5: resProv.data[5].provinsi,
            provinsi6: resProv.data[6].provinsi,
            provinsi7: resProv.data[7].provinsi,
            provinsi8: resProv.data[27].provinsi,
            provinsi9: resProv.data[28].provinsi,
            provinsi10: resProv.data[29].provinsi,
            provinsi11: resProv.data[30].provinsi,
            provinsi12: resProv.data[31].provinsi,
            provinsi13: resProv.data[32].provinsi,
            provinsi14: resProv.data[33].provinsi,
            provinsi15: resProv.data[9].provinsi,
            cases: resProv.data[1].kasus,
            cases2: resProv.data[2].kasus,
            cases3: resProv.data[3].kasus,
            cases4: resProv.data[4].kasus,
            cases5: resProv.data[5].kasus,
            cases6: resProv.data[6].kasus,
            cases7: resProv.data[7].kasus,
            cases8: resProv.data[27].kasus,
            cases9: resProv.data[28].kasus,
            cases10: resProv.data[29].kasus,
            cases11: resProv.data[30].kasus,
            cases12: resProv.data[31].kasus,
            cases13: resProv.data[32].kasus,
            cases14: resProv.data[33].kasus,
            cases15: resProv.data[9].kasus,
            trtd: resProv.data[1].dirawat,
            trtd2: resProv.data[2].dirawat,
            trtd3: resProv.data[3].dirawat,
            trtd4: resProv.data[4].dirawat,
            trtd5: resProv.data[5].dirawat,
            trtd6: resProv.data[6].dirawat,
            trtd7: resProv.data[7].dirawat,
            trtd8: resProv.data[27].dirawat,
            trtd9: resProv.data[28].dirawat,
            trtd10: resProv.data[29].dirawat,
            trtd11: resProv.data[30].dirawat,
            trtd12: resProv.data[31].dirawat,
            trtd13: resProv.data[32].dirawat,
            trtd14: resProv.data[33].dirawat,
            trtd15: resProv.data[9].dirawat,
            rcvrd: resProv.data[1].sembuh,
            rcvrd2: resProv.data[2].sembuh,
            rcvrd3: resProv.data[3].sembuh,
            rcvrd4: resProv.data[4].sembuh,
            rcvrd5: resProv.data[5].sembuh,
            rcvrd6: resProv.data[6].sembuh,
            rcvrd7: resProv.data[7].sembuh,
            rcvrd8: resProv.data[27].sembuh,
            rcvrd9: resProv.data[28].sembuh,
            rcvrd10: resProv.data[29].sembuh,
            rcvrd11: resProv.data[30].sembuh,
            rcvrd12: resProv.data[31].sembuh,
            rcvrd13: resProv.data[32].sembuh,
            rcvrd14: resProv.data[33].sembuh,
            rcvrd15: resProv.data[9].sembuh,
            tewas: resProv.data[1].meninggal,
            tewas2: resProv.data[2].meninggal,
            tewas3: resProv.data[3].meninggal,
            tewas4: resProv.data[4].meninggal,
            tewas5: resProv.data[5].meninggal,
            tewas6: resProv.data[6].meninggal,
            tewas7: resProv.data[7].meninggal,
            tewas8: resProv.data[27].meninggal,
            tewas9: resProv.data[28].meninggal,
            tewas10: resProv.data[29].meninggal,
            tewas11: resProv.data[30].meninggal,
            tewas12: resProv.data[31].meninggal,
            tewas13: resProv.data[32].meninggal,
            tewas14: resProv.data[33].meninggal,
            tewas15: resProv.data[9].meninggal,
      
        })
        console.log(resProv)
        
    }


  
    

    render(){

        return(
        <div>

<section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
            Covid-19 Update
            </h1>
            <h2 class="subtitle">
              Perkembangan Pandemi Covid-19 Di Indonesia
            </h2>
          </div>
        </div>
      </section>

      
            <div className="flex">
            
            <div className="box positif">
                <h3>Confirmed Case</h3>
                <h4>{this.state.positif}</h4>
            </div>
            <div className="box rawat">
                <h3>Treated Case</h3>
                <h4>{this.state.dirawat}</h4>
            </div>
            <div className="box sembuh">
                <h3>Recovered Case</h3>
                <h4>{this.state.sembuh}</h4>
            </div>
            <div className="box mati">
                <h3>Deaths Case</h3>
                <h4>{this.state.meninggal}</h4>
            </div>
            </div>
    
            <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Provinsi</th>
      <th scope="col">Cases</th>
      <th scope="col">Treated</th>
      <th scope="col">Recovered</th>
      <th scope="col">Deaths</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colSpan="provinsi">{this.state.provinsi}</td>
      <td>{this.state.cases}</td>
      <td>{this.state.trtd}</td>
      <td>{this.state.rcvrd}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{this.state.provinsi2}</td>
      <td>{this.state.cases2}</td>
      <td>{this.state.trtd2}</td>
      <td>{this.state.rcvrd2}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>{this.state.provinsi3}</td>
      <td>{this.state.cases3}</td>
      <td>{this.state.trtd3}</td>
      <td>{this.state.rcvrd3}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>{this.state.provinsi4}</td>
      <td>{this.state.cases4}</td>
      <td>{this.state.trtd4}</td>
      <td>{this.state.rcvrd4}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>{this.state.provinsi5}</td>
      <td>{this.state.cases5}</td>
      <td>{this.state.trtd5}</td>
      <td>{this.state.rcvrd5}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>{this.state.provinsi6}</td>
      <td>{this.state.cases6}</td>
      <td>{this.state.trtd6}</td>
      <td>{this.state.rcvrd6}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>{this.state.provinsi7}</td>
      <td>{this.state.cases7}</td>
      <td>{this.state.trtd7}</td>
      <td>{this.state.rcvrd7}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>{this.state.provinsi8}</td>
      <td>{this.state.cases8}</td>
      <td>{this.state.trtd8}</td>
      <td>{this.state.rcvrd8}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>{this.state.provinsi9}</td>
      <td>{this.state.cases9}</td>
      <td>{this.state.trtd9}</td>
      <td>{this.state.rcvrd9}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>{this.state.provinsi10}</td>
      <td>{this.state.cases10}</td>
      <td>{this.state.trtd10}</td>
      <td>{this.state.rcvrd10}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">11</th>
      <td>{this.state.provinsi11}</td>
      <td>{this.state.cases11}</td>
      <td>{this.state.trtd11}</td>
      <td>{this.state.rcvrd11}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">12</th>
      <td>{this.state.provinsi12}</td>
      <td>{this.state.cases12}</td>
      <td>{this.state.trtd12}</td>
      <td>{this.state.rcvrd12}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">13</th>
      <td>{this.state.provinsi13}</td>
      <td>{this.state.cases13}</td>
      <td>{this.state.trtd13}</td>
      <td>{this.state.rcvrd13}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">14</th>
      <td>{this.state.provinsi14}</td>
      <td>{this.state.cases14}</td>
      <td>{this.state.trtd14}</td>
      <td>{this.state.rcvrd14}</td>
      <td>{this.state.tewas}</td>
    </tr>
    <tr>
      <th scope="row">15</th>
      <td>{this.state.provinsi15}</td>
      <td>{this.state.cases15}</td>
      <td>{this.state.trtd15}</td>
      <td>{this.state.rcvrd15}</td>
      <td>{this.state.tewas}</td>
    </tr>

  </tbody>
</table>

 <center>           
<button href="aboutus.html" target="aboutus">
<a href="aboutus.html" target="aboutus">About Us</a>
</button>
</center>


        </div>)


    }
}