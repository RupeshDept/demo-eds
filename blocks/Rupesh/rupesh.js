/* eslint-disable no-plusplus */
export default function decorate(block) {
  block.classList.add('my-class');
  for (let i = 0; i < block.children.length; i++) {
    block.children[i].classList.add(`row-${i + 1}`);
    for (let j = 0; j < block.children[i].children.length; j++) {
      block.children[i].children[j].classList.add(`row-${i + 1}-col-${j + 1}`);
    }
  }
}
