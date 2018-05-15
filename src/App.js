import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      input1: "",
      input2: "",
      input3: "",
      hasil : "",
      check1: false,
      check2 : false,
      check3 : false
    }
  }

  handleChangeInp1(e){
    this.setState({
      input1 : e.target.value
    })
  }

  handleChangeInp2(e){
    this.setState({
      input2 : e.target.value
    })
  }

  handleChangeInp3(e){
    this.setState({
      input3 : e.target.value
    })
  }

  handleClickT(e){
    const check1 = this.state.check1;
    const check2 = this.state.check2;
    const check3 = this.state.check3;
    if(check1 === true && check2 === false && check3 === false){
      throw new Error();
    }else if(check1 === true && check2 === true && check3 ===false){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);

      const sum = num1+num2;
      this.setState({
        hasil : sum
      })
    } 
    

    
    if(check2 === true && check1 === false && check3 === false){
      throw new Error();
    }else if(check2 === true && check3 ===true && check1===false){
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num2+num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 === true && check1 === false && check2 === false){
      throw new Error();
    }else if(check3 === true && check1 ===true && check2===false){
      const num1 = parseInt(this.state.input1, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1+num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 && check1 && check2){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1+num2+num3;
      this.setState({
        hasil : sum
      })
    }

    if(check1 === false && check2 === false && check3 === false){
      throw new Error();
    }
  }

  handleClickK(e){
    const check1 = this.state.check1;
    const check2 = this.state.check2;
    const check3 = this.state.check3;
    if(check1 === true && check2 === false && check3 === false){
      throw new Error();
    }else if(check1 === true && check2 === true && check3 ===false){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);

      const sum = num1-num2;
      this.setState({
        hasil : sum
      })
    } 
    

    
    if(check2 === true && check1 === false && check3 === false){
      throw new Error();
    }else if(check2 === true && check3 ===true && check1===false){
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num2-num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 === true && check1 === false && check2 === false){
      throw new Error();
    }else if(check3 === true && check1 ===true && check2===false){
      const num1 = parseInt(this.state.input1, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1-num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 && check1 && check2){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1-num2-num3;
      this.setState({
        hasil : sum
      })
    }
    if(check1 === false && check2 === false && check3 === false){
      throw new Error();
    }
  }

  handleClickB(e){
    const check1 = this.state.check1;
    const check2 = this.state.check2;
    const check3 = this.state.check3;
    if(check1 === true && check2 === false && check3 === false){
      throw new Error();
    }else if(check1 === true && check2 === true && check3 ===false){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);

      const sum = num1/num2;
      this.setState({
        hasil : sum
      })
    } 
    

    
    if(check2 === true && check1 === false && check3 === false){
      throw new Error();
    }else if(check2 === true && check3 ===true && check1===false){
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num2/num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 === true && check1 === false && check2 === false){
      throw new Error();
    }else if(check3 === true && check1 ===true && check2===false){
      const num1 = parseInt(this.state.input1, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1/num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 && check1 && check2){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1/num2/num3;
      this.setState({
        hasil : sum
      })
    }
    if(check1 === false && check2 === false && check3 === false){
      throw new Error();
    }
  }

  handleClickKL(e){
    const check1 = this.state.check1;
    const check2 = this.state.check2;
    const check3 = this.state.check3;
    if(check1 === true && check2 === false && check3 === false){
      throw new Error();
    }else if(check1 === true && check2 === true && check3 ===false){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);

      const sum = num1*num2;
      this.setState({
        hasil : sum
      })
    } 
    

    
    if(check2 === true && check1 === false && check3 === false){
      throw new Error();
    }else if(check2 === true && check3 ===true && check1===false){
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num2*num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 === true && check1 === false && check2 === false){
      throw new Error();
    }else if(check3 === true && check1 ===true && check2===false){
      const num1 = parseInt(this.state.input1, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1*num3;
      this.setState({
        hasil : sum
      })
    }

    if(check3 && check1 && check2){
      const num1 = parseInt(this.state.input1, 10);
      const num2 = parseInt(this.state.input2, 10);
      const num3 = parseInt(this.state.input3, 10);

      const sum = num1*num2*num3;
      this.setState({
        hasil : sum
      })
    }
    if(check1 === false && check2 === false && check3 === false){
      throw new Error();
    }
  }

  handleCheck1(e){
    this.setState({
      check1 : e.target.checked
    })
  }
  handleCheck2(e){
    this.setState({
      check2 : e.target.checked
    })
  }

  handleCheck3(e){
    this.setState({
      check3 : e.target.checked
    })
  }
  render() {
    return (
      <div className="App"> 
      <h1 className="head">Calculator</h1>
          <input type="text" value={this.state.input1} onChange={this.handleChangeInp1.bind(this)} required />
          <input type="checkbox" onChange = {this.handleCheck1.bind(this)}/>
          <br />
          <input type="text" value={this.state.input2} onChange={this.handleChangeInp2.bind(this)} required />
          <input type="checkbox" onChange = {this.handleCheck2.bind(this)}/>
          <br/>
          <input type="text" value={this.state.input3} onChange={this.handleChangeInp3.bind(this)} required />
          <input type="checkbox" onChange = {this.handleCheck3.bind(this)}/>
          <br/>
      <div className="group">
        <button onClick={this.handleClickT.bind(this)}>+</button>
        <button onClick={this.handleClickK.bind(this)}>-</button>
        <button onClick={this.handleClickB.bind(this)}>/</button>
        <button onClick={this.handleClickKL.bind(this)}>*</button>
      </div>
        <h4>Hasil : {this.state.hasil}</h4>
        <br/>
        <h4>By Bee Bee Wijaya</h4>
      </div>
    );
  }
}

export default App;
