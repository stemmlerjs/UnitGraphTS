
import { Collection } from './collection'

export class NodeCollection<T> extends Collection<T> {}

export default () => {
  return NodeCollection;
}
