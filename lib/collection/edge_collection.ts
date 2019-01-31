
import { Collection } from './collection'

export class EdgeCollection<T> extends Collection<T> {}

export default () => {
  return EdgeCollection;
}

