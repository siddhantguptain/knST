import style from './ContactForm.module.css';

const ContactForm = () =>{
    return (
        <>
            <div className={style.container}>
                    <from action="#" method="POST" >
                        <input
                            className={style.inputField}
                            type="text"
                            name="name"
                            placeholder="Name"
                            autoComplete="off"
                            required
                        />
                        <input
                            className={style.inputField}
                            type="email"
                            name="Email"
                            placeholder="Email Address"
                            autoComplete="off"
                            required
                        />
                          <br />
                          <input
                            className={style.inputField}
                            type="text"
                            name="ph-number"
                            placeholder="Mobile Number"
                            autoComplete="off"
                            required
                        />
                        <input
                            className={style.inputField}
                            type="text"
                            name="comanyName"
                            placeholder="Company Name"
                            autoComplete="off"
                            required
                        />
                            <br />
                          <input
                            className={style.inputField}
                            type="date"
                            name="ph-number"
                            placeholder="Mobile Number"
                            autoComplete="off"
                            required
                        />
      {/* <select name="languages" id="lang">
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="java">Java</option>
        <option value="golang">Golang</option>
        <option value="python">Python</option>
        <option value="c#">C#</option>
        <option value="C++">C++</option>
        <option value="erlang">Erlang</option>
      </select> */}
                        <br />
                         {/* <textarea
                            className={style.inputField}
                            type="text"
                            name="comanyName"
                            placeholder="Enter Your Message"
                            rows="7"
                            cols="70"
                            autoComplete="off"
                            required
                        /> */}
                    </from>
                    
            </div>
            
        </>
    );
}
export default ContactForm;