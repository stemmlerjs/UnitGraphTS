
import { Unit } from './unit'
import { Edge } from './edge'

export class Node<T, U> extends Unit<T> {

  public edges: Edge<T>[];
  public inputEdges: Edge<T>[];
  public outputEdges: Edge<U>[];

  constructor(entity, properties: T, uniqid: any) {
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
