
import { Unit } from './unit'
import { Edge } from './edge'

export class Node extends Unit {

  public edges: Edge[];
  public inputEdges: Edge[];
  public outputEdges: Edge[];

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
