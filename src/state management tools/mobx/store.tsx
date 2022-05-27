import { observable } from 'mobx';

interface StoreProps {
  number: number;
  increase: () => void;
  decrease: () => void;
  multiple: () => void;
}

const countStore = observable<StoreProps>({
  number: 0,
  increase() {
    this.number++;
    console.log(this.number);
  },

  decrease() {
    this.number--;
    console.log(this.number);
  },

  multiple() {
    this.number *= 2;
    console.log(this.number);
  },
});

export default countStore;
