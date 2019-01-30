
import { Unit } from './unit'

export class Node extends Unit {

  public edges: any;
  public inputEdges: any;
  public outputEdges: any;

  constructor(entity, properties, uniqid) {

    super(entity, properties, uniqid);
    this.edges = [];
    this.inputEdges = [];
    this.outputEdges = [];

  }

  unlink() {

    let edges = this.edges;

    for (let i = 0, len = edges.length; i < len; i++) {
      edges[i].unlink();
    }

    return true;

  }

  toJSON() {

    return super.toJSON();

  }

}

export default () => {
  return Node;
}
