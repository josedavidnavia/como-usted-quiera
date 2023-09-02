
export class User extends HTMLElement {

    static get observedAttributes() {
        return ["name", "species","gender","house","yearOfBirth"];
      }

      attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
          case "name":
            this.userName = newValue;
            break;
    
          case "species":
            this.userSpecies = newValue;
            break;
            case "gender":
                this.userGender = newValue;
                break;
        
              case "house":
                this.userHouse = newValue;
                break;

                case "yearOfBirth":
                    this.userYearOfBirth= newValue;
                    break;
        
    
          default:
            break;
        }
      }
    
    constructor(){
        super();

        this.attachShadow({mode: "open"})
    }

    render(){
       
        this.shadowRoot.innerHTML = `
        <section>
        <h3>name: ${this.userName}</h3>
        <p>species: ${this.userSpecies} </p>
        <p>gender: ${this.userGender} </p>
        <p>house: ${this.userHouse} </p>
        <p>year of birth: ${this.userYearOfBirth} </p>
        
        <button>click me</button>

        </section>`;
    }
    connectedCallback(){
        this.render();
    }

}

customElements.define ("app-user", User)
