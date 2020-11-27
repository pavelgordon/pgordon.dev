import React, { useEffect, useState } from "react";
import { hashSync, compareSync } from "bcryptjs";

import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Layout from "../components/layout"

const Vertigo = ({ location, title, children }) => {

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-11-27T12:00:00`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

      const [ accessGranted , setAccessGranted] = useState({success: false});
        
      return (

        <Layout>
        
        <section className='container page'>
        
          <div >

          {accessGranted.success ? <span>
            Femke. <br/> <br/>
            
            My stay in Amsterdam was much shorter than expected, and I didn't make a lot of friends, or contacts or whatever. <br/>
            But talking to you(and just seeing you) always brightened my day, and I have learned a lot. Thanks to you - I feel much stronger and healthier now, and less ashamed to look in the mirror - that's a great feeling!<br/>
            I will never give up what we have achieved. <br/>
            Unfortunately, I didn't manage to get to know you better, so I make the most banal and boring gift - 
            card for <a href="bol.com">bol.com</a>. Please use it as you wish - it's Black Friday now. I hope you will enjoy it ;)
            <br/><br/>
            DIGI-AD56J-FS4DU-TBDWW
            <br/><br/>
            Anyway, thank you, Femke. You really helped me a lot, in a lot of ways. I wish you all the best in the career and life, keep it up! And of course, don't hesitate to ping me in case you will be in Stockholm. Caffes ares still open here :)
            <br/><br/>
            P.S. <br/>
            Dizziness is not completely gone but it's muuch muuuch better, and I believe it will be gone at at some point.<br/>
            I will finish at some point article at <a href="https://pgordon.dev/dizziness">https://pgordon.dev/dizziness</a>, maybe it will help someone in the future.

            P.P.S <br/>
            I wanted to say everything here in person, but with mask it's much complicated! 
            
            
            
            </span> :   
          <AuthenticationForm
            accessList={["Epley"]}
            onSuccess={credentials => {
              console.log("signin")
              setAccessGranted({...accessGranted, success: true})
            }}
          />}
          </div>
        </section>
    </Layout>
        
      );

}

export default Vertigo




function hasAccess(password, accessList) {
    const [credentialPassword] = accessList;

    if (
      password == credentialPassword
    ) {
      return true;
    }
  
  return false;
}

class AuthenticationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { password } = this.state;
    const { accessList, onSuccess } = this.props;
    console.log(password, accessList, )
    if (hasAccess(password, accessList)) {
      onSuccess({ password });
    }
  }

  render() {
    const { password } = this.state;
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Authentication needed(check the sticker!)</h1>
        <form style={styles.form} action="" onSubmit={this.onSubmit}>
          <label style={styles.label} htmlFor="password">
            password :
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
          />
          <br />
          <button style={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif"
  },
  title: {
    fontSize: 18
  },
  form: {
  },
  label: {
    display: "inline-block",
    textAlign: "right",
    padding: "5px 10px"
  },
  button: {
    margin: "20px 0"
  }
};

function generateHash(password) {
  return hashSync(password, 10);
}