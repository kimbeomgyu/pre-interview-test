// class 로 작성한 코드
// 상속을 통한 코드의 중복을 제거하고, 각 클래스안에 메소드를 담아서 캡슐화를 통해 간결한 구조를 유지할 수 있기에
// class 함수를 이용하는 것이 좋습니다.
class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }
  pop() {
    return this.queue.splice(0, 1)[0];
  }
}

class PeekableQueue extends Queue {
  // constructor 은 생략 가능하기에 생략했습니다.
  peek() {
    return this.queue[0];
  }
}

//========================================================================================//
// 3. 아래 코드를 class를 이용한 문법으로 변환해보세요. 둘을 비교해보고 어떤 것이 더 나은지 의견을 내보세요.
// const inherits = require('util').inherits;

// function Queue(contents = []) {
//   this.queue = [...contents];
// }
// Queue.prototype.pop = function() {
//   const value = this.queue[0];
//   this.queue.splice(0, 1);
//   return value;
// };

// function PeekableQueue(contents) {
//   // apply 는 배열을 받아서 각 값들을 인자로 이용하는데
//   // contents라는 첫번째 인자로 배열이 들어와야 하므로 call로 변경
//   Queue.call(this, contents);
// }
// inherits(PeekableQueue, Queue);
// PeekableQueue.prototype.peek = function() {
//   return this.queue[0];
// };

const peeka = new PeekableQueue([1, 2, 3]);
console.log(peeka);
console.log('pop :', peeka.pop());
console.log('peek :', peeka.peek());
console.log('instance :', peeka instanceof Queue);
console.log(peeka);

const queue = new Queue([1, 2, 3]);
console.log(queue);
console.log('pop :', queue.pop());
console.log('pop :', queue.pop());
console.log(queue);
