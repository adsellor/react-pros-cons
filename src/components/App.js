import React, {Component} from 'react';
import {render} from 'react-dom'

import styles from '../css/main.css'

export default class App extends Component {
   constructor(props) {
    super (props);
    this.state = {
        pros: [''],
        cons: [''],
    };
    this.addPro = this.addPro.bind(this);
    this.addCons = this.addCons.bind(this);        
  }

  addPro(event) {
    const pros = this.state.pros;
    pros[event.currentTarget.id] = event.currentTarget.value;
    if(pros[event.currentTarget.id] === '') {
      pros.splice(event.currentTarget.id, 1);
    }
    else if(event.currentTarget.id == pros.length - 1) {
      pros.push('');
    }
    this.setState({pros: pros});
    }

  addCons(event) {
    const cons = this.state.cons;
    cons[event.currentTarget.id] = event.currentTarget.value;
    if(cons[event.currentTarget.id] === '') {
      cons.splice(event.currentTarget.id, 1);
    }
    else if(event.currentTarget.id == cons.length - 1) {
      cons.push('');
    }
    this.setState({cons: cons});
  }

  render () {
   

    const pros = this.state.pros.map((pros, id) => {
      return (
        <li key={id} 
        className={styles.element}>
          <input id={id} className={styles.element} value={this.state.pros[id]} onChange={this.addPro}/>
        </li>
      )
    })

    const cons = this.state.cons.map((cons, id) => {
      return (
        <li key={id} 
        className={styles.element}>
          <input id={id} className={styles.element} 
          value={this.state.cons[id]} onChange={this.addCons}/>
          </li>
      )
    })

    return (
      <section className={styles.container}>
        <section className={styles.box}>
          <section className={styles.item}>Pros</section>
          <ol>
            {pros}
          </ol>
        </section>
        <section className={styles.box}>
          <section className={styles.item}>Cons</section>
          <ol>
            {cons}
          </ol>
        </section>
      </section>
    )
  }
}
