class Logging extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" })
        shadowRoot.innerHTML = `
            <style>
            @font-face {
                font-family: Matrix;
                src: url('../assets/matrix.ttf');
            }
            .box {
                width: 600px;
                height: 400px;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #1BFD9C;
                border-radius: 25px;
                margin: 20px;
                padding: 50px;
                color: #1BFD9C;
                font-family: Calibri;
            }
            .box-input {
                position: relative;
                padding: 15px 0 0;
                margin-top: 10px;
            }
            
           .box-button {
                position: relative;
                padding: 15px 0 0;
                margin-top: 15px;
           }
            .box-logo {
                flex: 2 1;
            }

            button {
                --green: #1BFD9C;
                font-size: 13px;
                padding: 0.7em 2.7em;
                letter-spacing: 0.06em;
                position: relative;
                font-family: inherit;
                border-radius: 0.6em;
                overflow: hidden;
                transition: all 0.3s;
                line-height: 1.4em;
                border: 2px solid var(--green);
                background: linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%,transparent 60% , rgba(27, 253, 156, 0.1) 100%);
                color: var(--green);
                box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1);
            }
            
            button:hover {
                color: #1BFD9C;
                box-shadow: inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2);
            }
            
            button:before {
                content: "";
                position: absolute;
                left: -4em;
                width: 4em;
                height: 100%;
                top: 0;
                transition: transform .4s ease-in-out;
                background: linear-gradient(
                    to right,
                    transparent 1%,
                    rgba(27, 253, 156, 0.1) 40%,
                    rgba(27, 253, 156, 0.1) 60%, 
                    transparent 100%
                );
            }
            
            button:hover:before {
                transform: translateX(15em);
            }
            
            input {
                font-family: inherit;
                width: 100%;
                border: 0;
                border-bottom: 2px solid gray;
                outline: 0;
                font-size: 1.3rem;
                color: white;
                padding: 7px 0;
                background: transparent;
                transition: border-color 0.2s;
            }
            
            input::placeholder {
                color: transparent;
            }
            
            input:placeholder-shown ~ label {
                font-size: 1rem;
                cursor: text;
                top: 20px;
            }
            
            label {
                position: absolute;
                top: 0;
                display: block;
                transition: 0.2s;
                font-size: 1rem;
                color: gray;
            }
            
            input:focus ~ label {
                position: absolute;
                top: 0;
                display: block;
                transition: 0.2s;
                font-size: 1rem;
                color: #1BFD9C;
                font-weight:700;
            }
            
            label:focus {
                padding-bottom: 6px;  
                font-weight: 700;
                border-width: 3px;
                border-image-slice: 1;
            }
            
            input:required, input:invalid {
                box-shadow:none;
            }
            
            </style>
            <div class="box">
                <div class="form">
                    <h1>MATRIX</h1>
                    <div class="box-input">
                        <input type="text" placeholder="Name">
                        <label>Name</label>
                    </div>
                    <div class="box-input">
                        <input type="password" placeholder="Password">
                        <label>Password</label>
                    </div>
                    <div class="box-button">
                        <button>Connect</button>
                    </div>
                    
                </div>
                <div class="box-logo">
                
                </div>
            </div>
        `
    }
}

export default {
    name: 'x-logging',
    constructor: Logging
}