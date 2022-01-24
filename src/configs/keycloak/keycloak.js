import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://34.101.119.130:8080/auth',
  realm: 'visiondg',
  clientId: 'reactjs',
});

export default keycloak;
