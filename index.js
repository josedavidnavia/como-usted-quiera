import data from "./data.js";
import { User } from "./src/modules/user/user.js";
console.log (data.length);

class App extends HTMLElement {

   
    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    render(){
        const users = data.map(
            (user) =>
              `<app-user name="${user.name}" species="${user.species}" gender="${user.gender}" house="${user.house}" year of birth="${user.yearOfBirth}" ></app-user>`
          );
          const usersJoined = users.join("");
          this.shadowRoot.innerHTML = `${usersJoined}`;
    }
    connectedCallback(){
        this.render();
    }

}

customElements.define ("app-container", App)


