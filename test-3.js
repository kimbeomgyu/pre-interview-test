// 3. 아래 코드를 class를 이용한 문법으로 변환해보세요. 둘을 비교해보고 어떤 것이 더 나은지 의견을 내보세요.
const inherits = require('util').inherits;

function Queue(contents = []) {
  this.queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this.queue[0];
  this.queue.splice(0, 1);
  return value;
};

function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this.queue[0];
};
