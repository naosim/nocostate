import { DomainRepository } from "./nocostate.mjs";

export class Api {
  domainRepository = new DomainRepository();
  invokeEntry(domainName, event, parentId, options) {
    const domain = this.domainRepository.find(domainName);
    const entryState = domain.states[0];
    

  }
  invoke(domain, event, id) {}
}
