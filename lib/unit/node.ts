
import { Unit } from './unit'
import { Edge } from './edge'

export class Node<T, U> extends Unit<T> {

  public edges: Edge<T,U>[] | Edge<T, U>[] | any;
  public inputEdges: Edge<T, U>[] | any;
  public outputEdges: Edge<U,T>[] | any;

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
